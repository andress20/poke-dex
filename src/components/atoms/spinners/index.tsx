import { Box } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import { useIsFetching } from '@tanstack/react-query'

/**
 *
 * @returns Shows up spinner ONLY when tanstack_query is fetching
 */
export function Fetching(): JSX.Element {
  const isfetching = useIsFetching()

  const display = isfetching ? 'inherit' : 'none'

  return (
    <Box
      sx={{
        displayPrint: { display },
        zIndex: '99',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50% )',
      }}
    >
      <CircularProgress />
    </Box>
  )
}
export function Loading(): JSX.Element {
  return (
    <Box
      sx={{
        zIndex: '99',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50% )',
      }}
    >
      <CircularProgress />
    </Box>
  )
}
