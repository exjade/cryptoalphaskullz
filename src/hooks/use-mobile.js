import { useState, useEffect } from 'react'
import useModal from './use-modal'

export default function useMobile() {
    const [mobile, setMobile] = useState(window.innerWidth > 600)
    const { setOpen } = useModal()

    const updateMedia = () => {
        setMobile(window.innerWidth > 600)
        setOpen(false)
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }

    useEffect(() => {
        const handleResize = () => {
            window.addEventListener('resize', updateMedia)
        }
        return () => handleResize()
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return { mobile }
}