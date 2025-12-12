import { createAgent, grok, gemini } from '@inngest/agent-kit';
import { inngest } from './client';

export const helloWorld = inngest.createFunction(
	{ id: 'hello-world' },
	{ event: 'test/hello.world' },
	async ({ event, step }) => {
		const codeAgent = createAgent({
			name: 'code-agent',
			system:
				'You are an expert NextJS Developer.  You write readable maintainable code. You write simple nextjs & react snippets',
			model: gemini({ model: 'gemini-2.5-flash' }),
		});
		const { output } = await codeAgent.run(
			`write the following snippet ${event.data.value}`
		);
		console.log(output);
		return { output };
	}
);
