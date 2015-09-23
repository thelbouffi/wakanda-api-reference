interface AttributeEvent {
	clientRefresh(event:AttributeEventObject):any;
	init(event:AttributeEventObject):any;
	load(event:AttributeEventObject):any;
	remove(event:AttributeEventObject):any;
	save(event:AttributeEventObject):any;
	set(event:AttributeEventObject):any;
	validate(event:AttributeEventObject):any;
	validateremove(event:AttributeEventObject):any;
}

interface AttributeEventObject {
	
}