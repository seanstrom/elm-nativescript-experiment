/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first page.
*/

import Elm from './Main.elm'
import { svelteNativeNoFrameCallback } from 'elm-nativescript'

const render = (node: any) => Elm().Main.init({ node: node })

svelteNativeNoFrameCallback(render, {})
