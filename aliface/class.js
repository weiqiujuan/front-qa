class Property {
	constructor(_identify, _region, _name) {
		this.id = _identify;
		this.region = _region;
		this.name = _name;
	}

	buy() {
		let _url = "https://www.aliyun.com/buy?";
		for (let _key in this) {
			if (this.hasOwnProperty(_key) && typeof (this[_key]) !== "object") {
				_url += _key + "=" + this[_key] + "&";
			}
		}
		if (_url.indexOf("&") > 0) {
			return _url.replace(/&$/g, "");
		}
		return _url;
	}
}

class ECS extends Property {
	constructor(_identify, _region, _name) {
		super(_identify, _region, _name);
	}

	config(_value) {
		this.instance = _value;
		return this;
	}
}

let _ecs = new ECS(1, "beijing", "ECS");
console.log(_ecs.config("ecs.t1.small"));
console.log(_ecs.buy());


class RDS extends Property {
	constructor(_identify, _region, _name) {
		super(_identify, _region, _name);
	}

	config(_type) {
		this.dbType = _type;
		return this;
	}
}

var _rds = new RDS(2, "beijing", "RDS");
console.log(_rds.config("mysql"));
console.log(_rds.buy());
