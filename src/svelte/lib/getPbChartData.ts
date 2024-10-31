import { useQuery, type UseQueryStoreResult } from "@sveltestack/svelte-query";
import axios, { type AxiosError } from "axios";
import type { ChartData } from "../appConfig/types";

interface ResData {
	object: ChartData;
}
export const getPBChartData = (
	objectSlug: string,
): UseQueryStoreResult<ChartData, AxiosError> =>
	useQuery<ChartData, AxiosError>({
		queryKey: ["object", objectSlug],
		enabled: objectSlug !== undefined,
		queryFn: async () => {
			try {
				const { data } = await axios.get<ResData>(
					`https://plot-guard.azurewebsites.net/external/${objectSlug}`,
					// `http://localhost:443/external/${objectSlug}`,
					{
						headers: {
							Accept: "application/json, text/plain, */*",
							"Access-Control-Allow-Origin": true,
						},
					},
				);
				return data.object;
			} catch (error: any) {
				console.log(error.message);
				if (error.response) {
					const errorMessage = error.response.data.message;
					throw new Error(errorMessage);
				} else {
					throw new Error(error.message);
				}
			}
		},
	});
