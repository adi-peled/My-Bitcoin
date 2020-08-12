import { UtilService } from '../utilService/util.service'

export class Contact {
    // utilService: UtilService
    constructor(
        public name: string = '',
        public email: string = '',
        public phone: string = '',
        public _id?: string,
    ) {

    }

    setId?() {
        // Implement your own set Id
        const utilService = new UtilService
        this._id = utilService.makeId(8)
    }

}




