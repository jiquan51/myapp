import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-hotspots',
	templateUrl: 'hotspots.html'
})
export class HotSpotsPage {
	data = [
		{ 'zoneName': '广州区', 'arriveTickets': '6987', 'moniOutCnt': '2221', 'moniStayCnt': '45', 'moniUndeliveryCnt': '44' },
		{ 'zoneName': '深圳区', 'arriveTickets': '2356', 'moniOutCnt': '331', 'moniStayCnt': '45', 'moniUndeliveryCnt': '44' },
		{ 'zoneName': '武汉区', 'arriveTickets': '6744', 'moniOutCnt': '2621', 'moniStayCnt': '45', 'moniUndeliveryCnt': '44' },
		{ 'zoneName': '苏州区', 'arriveTickets': '6542', 'moniOutCnt': '2881', 'moniStayCnt': '45', 'moniUndeliveryCnt': '44' },
		{ 'zoneName': '杭州区', 'arriveTickets': '2367', 'moniOutCnt': '5621', 'moniStayCnt': '45', 'moniUndeliveryCnt': '44' },
		{ 'zoneName': '东莞区', 'arriveTickets': '1129', 'moniOutCnt': '1221', 'moniStayCnt': '45', 'moniUndeliveryCnt': '44' },
		{ 'zoneName': '惠州区', 'arriveTickets': '7893', 'moniOutCnt': '4521', 'moniStayCnt': '45', 'moniUndeliveryCnt': '44' },
		{ 'zoneName': '汕头区', 'arriveTickets': '2356', 'moniOutCnt': '7821', 'moniStayCnt': '45', 'moniUndeliveryCnt': '44' },
		{ 'zoneName': '清远区', 'arriveTickets': '67554', 'moniOutCnt': '9921', 'moniStayCnt': '45', 'moniUndeliveryCnt': '44' },
		{ 'zoneName': '长沙区', 'arriveTickets': '5534', 'moniOutCnt': '2221', 'moniStayCnt': '45', 'moniUndeliveryCnt': '44' },
		{ 'zoneName': '岳阳区', 'arriveTickets': '6643', 'moniOutCnt': '2221', 'moniStayCnt': '45', 'moniUndeliveryCnt': '44' },
		{ 'zoneName': '株洲区', 'arriveTickets': '6546', 'moniOutCnt': '2221', 'moniStayCnt': '45', 'moniUndeliveryCnt': '44' },
		{ 'zoneName': '南充区', 'arriveTickets': '4353', 'moniOutCnt': '2221', 'moniStayCnt': '45', 'moniUndeliveryCnt': '44' },
		{ 'zoneName': '鞍山区', 'arriveTickets': '4526', 'moniOutCnt': '2221', 'moniStayCnt': '45', 'moniUndeliveryCnt': '44' }
	];
	constructor(public navCtrl: NavController) {

	}

}
