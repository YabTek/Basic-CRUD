import { css } from '@emotion/css'

function Header() {
    return (
      <>
        <h1 className={css`
         text-align: center;
         padding: 16px;
         background-color: green;
         border-radius: 8px;
         font-size: 32px;
         `}>
         Employee control app</h1>
      </>
    )}
  
    export default Header