'use client';

import { useState } from 'react';
import { validateEmail, type EmailValidationResult } from '../../../../mail-validatr/dist';

export default function Home() {
  const [email, setEmail] = useState('');
  const [result, setResult] = useState<EmailValidationResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const validate = async () => {
    setLoading(true);
    setResult(null);

    try {
      const res = await validateEmail(email, { skipDnsCheck: true });
      setResult(res);
    } catch (err) {
      setError('Validation failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-xl mx-auto mt-20 px-4">
      <h1 className="text-xl font-bold mb-4">Email Validator (Client-only)</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 p-2 flex-1 rounded"
        />
        <button
          onClick={validate}
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          {loading ? 'Checking...' : 'Validate'}
        </button>
      </div>

      {error && (
        <div className="bg-red-100 text-red-800 p-3 rounded mb-4">
          {error}
        </div>
      )}

      {result && (
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <span className={`px-3 py-1 rounded text-sm font-medium ${result.isValidSyntax ? 'bg-green-600 text-white' : 'bg-red-600 text-white'}`}>
              Syntax: {result.isValidSyntax ? 'Valid' : 'Invalid'}
            </span>

            <span className={`px-3 py-1 rounded text-sm font-medium ${result.recommended ? 'bg-green-600 text-white' : 'bg-yellow-600 text-black'}`}>
              Recommended: {result.recommended ? 'Yes' : 'No'}
            </span>

            {'hasValidDomain' in result && (
              <span className={`px-3 py-1 rounded text-sm font-medium ${result.hasValidDomain ? 'bg-green-600 text-white' : 'bg-red-600 text-white'}`}>
                Domain: {result.hasValidDomain ? 'Valid' : 'Invalid'}
              </span>
            )}

            {'hasMxRecords' in result && (
              <span className={`px-3 py-1 rounded text-sm font-medium ${result.hasMxRecords ? 'bg-green-600 text-white' : 'bg-red-600 text-white'}`}>
                MX Records: {result.hasMxRecords ? 'Found' : 'Missing'}
              </span>
            )}
          </div>

          {result.warnings.length > 0 && (
            <div className="bg-yellow-100 text-yellow-900 p-3 rounded">
              <p className="font-medium mb-2">Warnings:</p>
              <ul className="list-disc list-inside text-sm">
                {result.warnings.map((warning, idx) => (
                  <li key={idx}>
                    <strong>{warning.code}</strong>: {warning.message}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <pre className="bg-gray-900 text-gray-100 p-4 rounded text-sm whitespace-pre-wrap">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}

    </main>
  );
}
