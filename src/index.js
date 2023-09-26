import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./locales/es";
import localEnMessages from './locales/en'
import JobsList from "./components/jobslist";
const idioma = navigator.language 
const idiomaMensajes = idioma === 'es' ? localeEsMessages: localEnMessages;

ReactDOM.render(
    <IntlProvider locale={idioma} messages= {idiomaMensajes}>
            <JobsList/>
    </IntlProvider>, document.getElementById("root")
);