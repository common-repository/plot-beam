import { useQuery, type UseQueryStoreResult } from "@sveltestack/svelte-query";
import axios, { type AxiosError } from "axios";
import type { ChartData } from "../appConfig/types";

interface ResData {
	object: ChartData;
}
export const getTestChartData = (
	appID: string,
	objectID: string,
): UseQueryStoreResult<ChartData, AxiosError> =>
	useQuery<ChartData, AxiosError>({
		queryKey: ["object", objectID, appID],
		enabled: objectID !== undefined && appID !== undefined,
		queryFn: async () => {
			try {
				const { data } = await axios.get<ResData>(
					"https://plot-guard.azurewebsites.net/api/qlik/object",
					// `http://localhost:443/api/qlik/object`,
					{
						headers: {
							Accept: "application/json, text/plain, */*",
							"Access-Control-Allow-Origin": true,
						},
						params: {
							objectID: objectID,
							appID: appID,
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
