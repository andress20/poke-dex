import { Dispatch, SetStateAction, useState } from 'react'
import { QueryClient } from '@tanstack/react-query'

export const useInitialQueryClient = (setOpenToast: Dispatch<SetStateAction<boolean>>) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // cacheTime: 3000, Just and example (default cacheTime 5 minutes)
            refetchOnWindowFocus: false,
            retry: 2,
            onError: () => setOpenToast(true),
          },
        },
      })
  )
  return queryClient
}
