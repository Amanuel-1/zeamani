import { QueryParams, createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'


var readToken="skmbLOa93n5iZwSjJLnx6dRvMJUrWOhUbcDcT31golhyGtHMLD38rxQAFrPSLScBipuQ1kkqK6Y6TkDmM53lIUo66ov4mWrw28n2kwFvJ5I64mHR8PSXqFpo37Wy7RyYaQnNLvufLXCKAl2rRX4JGRkXzdIQGjZ53T5vmlUurHMxyc1ggWZM"
export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  token:readToken,
  useCdn:true

})


// const DEFAULT_PARAMS = {} as QueryParams
// const DEFAULT_TAGS = [] as string[]

// export async function sanityFetch<QueryResponse>({
//   query,
//   params = DEFAULT_PARAMS,
//   tags = DEFAULT_TAGS,
// }: {
//   query: string
//   params?: QueryParams
//   tags: string[]
// }): Promise<QueryResponse> {
//   return client.fetch<QueryResponse>(query, params, {
//     cache: 'force-cache',
//     next: {
//       //revalidate: 30, // for simple, time-based revalidation
//       tags, // for tag-based revalidation
//     },
//   })
// }
