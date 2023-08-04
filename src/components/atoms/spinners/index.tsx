import { Backdrop, Box } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import { useIsFetching } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

/**
 *
 * @returns Shows up spinner ONLY when tanstack_query is fetching
 */
export function Fetching(): JSX.Element {
  const isfetching = useIsFetching()
  const [path, setPath] = useState('')

  useEffect(() => {
    if (window !== undefined) {
      setPath(window?.location.href.split('/').pop() || '')
    }
  }, [isfetching])

  const display = isfetching ? 'inherit' : 'none'

  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
      open={!!isfetching}
      invisible={path === 'allPokemonsScroll'}
    >
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
    </Backdrop>
  )
}
export function Loading(): JSX.Element {
  const isfetching = useIsFetching()
  return (
    <Backdrop sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }} open={!!isfetching}>
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
    </Backdrop>
  )
}
