'use client';

import { useCompletion } from 'ai/react';

export default function Completion() {
	const { completion, input, stop, isLoading, handleInputChange, handleSubmit } = useCompletion({
		api: '/api/completion'
	});

	return (
		<div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
			<form onSubmit={handleSubmit}>
				<label>
					Say something...
					<input
						className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
						value={input}
						onChange={handleInputChange}
					/>
				</label>
				<output>Completion result: {completion}</output>
				<button type="button" onClick={stop}>
					Stop
				</button>
				<button disabled={isLoading} type="submit">
					Send
				</button>
			</form>
		</div>
	);
}