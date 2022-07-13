import { useState } from "react";

export const Create = ({ itemType, createItem }) => {
    const [att, setAtt] = useState(null)

    const checkAtt = () => {
        if (itemType === 'folder') {
            if (!att.includes('.') && att.length > 0) {
                createItem(att, itemType)
            }
        } else if (itemType === 'file') {
            createItem(att, itemType)
        }
    }

    return (
        <>
            {itemType === 'folder' ?
                <div className="folderexplorer--create">
                    <input type="text" className="form--input" onChange={(e) => setAtt(e.target.value)} />
                    <button className="btn" onClick={() => checkAtt()}>Create</button>
                </div>
                :
                <div className="folderexplorer--create">
                    < input id="file" type="file" accept="image/png, image/jpeg, image/jpg" onChange={e => setAtt(e.target.files[0])} className="form--input" />
                    <button className="btn btn--left" onClick={() => checkAtt()}>Create</button>
                </div>
            }
        </>
    )
}