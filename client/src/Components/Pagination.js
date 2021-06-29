import { observer } from 'mobx-react-lite'
import React, {useContext} from 'react'
import { Context } from '..'
import {Pagination} from "react-bootstrap"


const Paginations =  observer(() => {
    const {device} = useContext(Context)
    console.log(device.totalCount)
    console.log(device.limit)
    const pageCount = Math.ceil(device.totalCount / device.limit)
    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    return (
        <Pagination className="mt-3">
            {pages.map(page =>
                <Pagination.Item
                    key={page}
                    active={device.page === page}
                    onClick={() => device.setPage(page)}
                >
                    {page}
                </Pagination.Item>
            )}
        </Pagination>
    );
});


export default Paginations
