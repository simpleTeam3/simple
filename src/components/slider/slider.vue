<template>
    <div :class="prefix">
        <div :class="prefix + '-wrap'" ref="bar">
            <div 
                :class="prefix + '-bar'"
                :style="{width: buttonLeft + '%'}"
            >
            </div>
            <div 
                :class="prefix + '-button-wrap'"
                :style="{left: buttonLeft + '%'}"
                @mousedown="onMouseDown($event)"
            >
                <div 
                    :class="prefix + '-button'"
                >
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { getOneStyle } from '../../utils/tools'

export default {
	name: 'vutSlider',
	model:{
		event: 'on-change'
	},
    props: {
        value: {
            type: Number,
            default: 0
		},
		min: {
			type: Number,
			default: 0
		},
        max: {
            type: Number,
            default: 100
        },
        disabled: Boolean
    },
    data(){
        return {
			prefix: this.global.prefix + 'slider',
			roundValue: this.value,
			currentValue: this.value,
			startX: 0,
			startPosition: 0,
			currentX: 0 
        }
    },
    computed: {
        buttonLeft(){
            return this.currentValue/this.max * 100;
		},
		valueRange(){
			return this.max - this.min;
		},
		barWidth(){
			return parseInt(getOneStyle(this.$refs.bar, 'width'));
		}
    },
    methods: {
        getSliderX(event){
            return event.clientX;
        },
        onMouseDown(event){
			console.log(event);
            if(this.disabled) return;
            event.preventDefault();
			this.onSliderDragStart(event);
			
			window.addEventListener('mousemove', this.onSliderDrag);
			window.addEventListener('mouseup', this.onSliderDragEnd);
        },
        onSliderDragStart(event){
			this.startX = this.getSliderX(event);
		},
        onSliderDrag(event){
			this.currentX = this.getSliderX(event);
			const diff = ((this.currentX - this.startX)/this.barWidth) * 100;
			
			this.changeSliderPosition(diff + this.currentValue);
		},
		onSliderDragEnd(){
			window.removeEventListener('mousemove', this.onSliderDrag);
			window.removeEventListener('mouseup', this.onSliderDragEnd);
		},
		changeSliderPosition(newPos){
			if(newPos > this.max){
				if(this.currentValue == this.max) return;
				this.currentValue = this.max;
			} else if (newPos <= 0) {
				if (this.currentValue === 0) return;
				this.currentValue = 0;
			}else{
				this.currentValue = newPos;
				this.startX = this.currentX;
			}
			if(Math.abs(this.currentValue - this.roundValue) >= 1){
				this.roundValue = Math.floor(this.currentValue);
				this.$emit('on-change', this.roundValue);
			}
		}
    }
}
</script>

