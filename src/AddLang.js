import React, {useState} from 'react'

export const LANG = ['python']

export default function AddLang(props) {

    const [lang, setLang] = useState("");
    const setTab = props.onChangeTab;

    const setLangs = props.onAddLang;
    let langs = props.langs;

    const addLang = () => {
        setLangs([...langs, lang]);
        setTab('disp')
    }

    return (
        <>
            <input label="言語" value={lang} onChange={ (event) => { setLang(event.target.value) } }></input>
            <button onClick={addLang}>add</button>
        </>
    )
}