<script lang="ts">
	import { QueryClient, QueryClientProvider } from "@sveltestack/svelte-query";
	import Entry from "./Entry.svelte"
	import type{AppProp} from './appConfig/types';
	export let props: AppProp;

	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				cacheTime: 1 * (60 * 1000), // 5 mins
				retry: 1,
				refetchOnWindowFocus: "always",
				refetchInterval: 5 * 60 * 1000,
			},
		},
	});
</script>

<QueryClientProvider client={queryClient}>
	<Entry {props} />
</QueryClientProvider>

<style>
</style>
