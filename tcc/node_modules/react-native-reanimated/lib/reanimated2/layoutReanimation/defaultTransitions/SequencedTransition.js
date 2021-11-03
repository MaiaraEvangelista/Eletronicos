import { withSequence, withTiming } from '../../animation';
import { BaseAnimationBuilder } from '../animationBuilder';
export class SequencedTransition extends BaseAnimationBuilder {
    constructor() {
        super(...arguments);
        this.reversed = false;
        this.build = () => {
            var _a;
            const delayFunction = this.getDelayFunction();
            const callback = this.callbackV;
            const delay = this.getDelay();
            const sequenceDuration = ((_a = this.durationV) !== null && _a !== void 0 ? _a : 500) / 2;
            const config = { duration: sequenceDuration };
            const reverse = this.reversed;
            return (values) => {
                'worklet';
                return {
                    initialValues: {
                        originX: values.boriginX,
                        originY: values.boriginY,
                        width: values.bwidth,
                        height: values.bheight,
                    },
                    animations: {
                        originX: delayFunction(delay, withSequence(withTiming(reverse ? values.boriginX : values.originX, config), withTiming(values.originX, config))),
                        originY: delayFunction(delay, withSequence(withTiming(reverse ? values.originY : values.boriginY, config), withTiming(values.originY, config))),
                        width: delayFunction(delay, withSequence(withTiming(reverse ? values.bwidth : values.width, config), withTiming(values.width, config))),
                        height: delayFunction(delay, withSequence(withTiming(reverse ? values.height : values.bheight, config), withTiming(values.height, config))),
                    },
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new SequencedTransition();
    }
    static reverse() {
        const instance = SequencedTransition.createInstance();
        return instance.reverse();
    }
    reverse() {
        this.reversed = !this.reversed;
        return this;
    }
}
