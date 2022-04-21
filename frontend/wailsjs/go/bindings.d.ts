import * as models from './models';

export interface go {
  "main": {
    "App": {
		Greet(arg1:string):Promise<string>
		SimulateTrace():Promise<void>
    },
  }

}

declare global {
	interface Window {
		go: go;
	}
}
