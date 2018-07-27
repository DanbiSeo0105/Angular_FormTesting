export class Offer {
    constructor(
        public strName: string,
        public strType: string,
        public intPrchUnlock: number,
        public dblReVal: string, // type check!
        public strUPCs: string,
        public strReq: string,
        public dtBestDate?: string, // type check!
    ){}
}
