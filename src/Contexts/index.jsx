import { createContext, useState } from 'react'

export const DropDownMenuContext = createContext()

export const DropDownMenuProvider = ({ children }) => {
    const [dropdown, setDropdown] = useState(false)

    const handleDropdown = () => {
        if (dropdown === true) {
            setDropdown(false)
        } else {
            setDropdown(true)
        }
    }

    return (
        <DropDownMenuContext.Provider value={{handleDropdown, dropdown}}>
            {children}
        </DropDownMenuContext.Provider>
    )
}
