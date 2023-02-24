import { lstat } from 'node:fs/promises'
import { cwd } from 'node:process'
import { ipcRenderer } from 'electron'

ipcRenderer.on('main-process-message', (_event, ...args) => {
  // console.log('[Receive Main-process message]:', ...args)
  return
})

lstat(cwd()).then(stats => {
  return
}).catch(err => {
  console.error(err)
})
