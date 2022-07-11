import FolderIcon from '@mui/icons-material/Folder';

export const Item = ({ element, openWindow }) => {

    return (
        <div className="item--main">
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