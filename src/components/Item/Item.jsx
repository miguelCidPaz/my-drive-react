import FolderIcon from '@mui/icons-material/Folder';

export const Item = ({ element, openWindow, deleteItem }) => {

    const close = ({ name, id }) => {
        const comprobate = name.split('.').length > 1
        console.log({ comprobate });
        if (comprobate) {
            deleteItem(id, name, 'file')
        } else {
            deleteItem(id, name, 'folder')
        }
    }

    return (
        <div className="item--main">
            <button className="item--close"
                onClick={() => close(element)}>X</button>
            <button
                className='item--button'
                onClick={() => openWindow(element.id)}
            >
                <FolderIcon className='item--icon' />
            </button>
            <p className="item--name">{element.name}</p>
        </div>
    )
}