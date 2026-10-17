import { useCallback, useEffect, useState } from 'react'

export const useDashboardResource = loader => {
  const [revision, setRevision] = useState(0)
  const [state, setState] = useState({ data: null, loading: true, error: null })

  useEffect(() => {
    let active = true
    loader(revision > 0).then(
      data => {
        if (active) setState({ data, loading: false, error: null })
      },
      error => {
        if (active)
          setState({
            data: null,
            loading: false,
            error:
              error.name === 'AbortError'
                ? 'The request timed out. Please try again.'
                : error.message
          })
      }
    )
    return () => {
      active = false
    }
  }, [loader, revision])

  const retry = useCallback(() => {
    setState(previous => ({ ...previous, loading: true, error: null }))
    setRevision(previous => previous + 1)
  }, [])

  return { ...state, retry }
}
