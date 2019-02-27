import http from "../utils/http";

export const HomeData = (params) => http("post","/api/v3/ad/homepage?connect_id=&type=0&lonlat=116.25145%2C40.11636&ad_code=110114&tab_id=",params)