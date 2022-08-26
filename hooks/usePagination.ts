import {useEffect, useState} from "react";

interface UsePagination {
    page: number
    onPage: (page: number) => void
}

const usePagination = (deps: any[] = []): UsePagination => {
    const [page,setPage] = useState(0)

    const onPage = (page: number) => {
        setPage(page)
    }

    useEffect(() => {
        setPage(0)
    },deps)

    return {
        page,
        onPage
    }
}

export default usePagination