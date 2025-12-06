import { useTRPC } from '@/trpc/client';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { caller } from '@/trpc/server';

export default async function Page() {
	const data = await caller.hello({ text: 'hello' });
	return <div className='font-bold'></div>;
}
