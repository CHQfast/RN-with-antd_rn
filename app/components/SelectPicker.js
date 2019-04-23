import React, {Component} from 'react'
import { Picker, List, Badge } from 'antd-mobile-rn';
const Item=List.Item

export default class SelectPicker extends Component {

	state = {
		optdata: []
	}
	handleOk = (e) => {
		let {formList} = this.props
		formList.value = e[0]
		this.triggerChange(...e);
	}
	triggerChange = (changedValue) => {
		const onChange = this.props.onChange;
		if(onChange) {
			onChange(changedValue);
		}
	}
	render() {
		const {formList,disabled,optdata} = this.props
		const {title,fieldId,value} = formList
		return(
                <Picker                                      
                    data={optdata}
                    title={`请选择${title}`}
					itemStyle={{marginVertical:5}}
					cols={1}
                    disabled={disabled}
                    value={value?[value]:[]}
                    onOk={e=>this.handleOk(e)}
                >
                    {this.props.children}
                </Picker>
		)
	}
}