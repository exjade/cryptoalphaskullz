import { useState, useEffect } from 'react'

export default function useMobile(setOpen) {
    const [mobile, setMobile] = useState(window.innerWidth > 600)

    const updateMedia = () => {
        setMobile(window.innerWidth > 600)
        setOpen(false)
    }

    useEffect(() => {
        window.addEventListener('resize', updateMedia)
        return () => window.addEventListener('resize', updateMedia)
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return { mobile }
}