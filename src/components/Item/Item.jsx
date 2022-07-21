import FolderIcon from '@mui/icons-material/Folder';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import { useState, useEffect } from 'react';

const { REACT_APP_API_URL_SHORT } = process.env

export const Item = ({ element, openWindow, deleteItem, downloadItem }) => {
    const [comprobate, setComprobate] = useState(null);

    const close = ({ name, id }) => {
        if (comprobate) {
            deleteItem(id, name, 'file')
        } else {
            deleteItem(id, name, 'folder')
        }
    }

    const open = () => {
        const itemName = element.name
        if (!comprobate) {
            openWindow(element.id, element.name)
        } else {
            const ext = itemName.split('.')[1]
            const nameFileInApi = `${element.id}.${ext}`
            downloadItem(nameFileInApi)
        }
    }

    useEffect(() => {
        if (element !== undefined && element !== null) {
            const itemName = element.name
            setComprobate(itemName.split('.').length > 1)
        }

    }, [element])

    useEffect(() => {

    }, [comprobate])

    return (
        <div className="item--main">
            <button className="item--close"
                onClick={() => close(element)}>X
            </button>

            {comprobate ?
                <a
                    className='item--button'
                    href={REACT_APP_API_URL_SHORT + element.name}
                    target={'_blank'}
                    download={element.name}
                >
                    <FileOpenIcon className='item--icon' />
                </a>
                :
                <button
                    className='item--button'
                    onClick={() => open()}
                >
                    <FolderIcon className='item--icon' />
                </button>
            }

            <p className="item--name">{element.name}</p>
        </div>
    )
}