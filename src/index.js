import React from "react"
import * as ReactDOMClient from "react-dom/client"
import "./index.css"
import { Provider } from "react-redux"
import configureStore from "./store/configureStore"
import { FFXIVAlbum } from "./FFXIVAlbum"
import { BrowserRouter } from "react-router-dom"
import reportWebVitals from "./reportWebVitals"

const store = configureStore()
const root = ReactDOMClient.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <FFXIVAlbum />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)

reportWebVitals()
