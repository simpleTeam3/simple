export default {
    methods: {
        dispatch(componentName, eventName, params){
            var parent = this.$parent || this.$root;
            var name = parent.$options.name;

           while(parent && (!name || name !== componentName)){
                parent = parent.$parent;

                if(parent){
                    name = parent.$options.name;
                }
            }
            
            if(name == componentName){
                parent.$emit.apply(parent, [eventName].concat(params));
            }
        },
        broadcast(componentName, eventName, params){
            this.$children.forEach( child => {
                let name = child.$options.name;

                if(name == componentName){
                    child.$emit.apply(child, eventName.concat(params));
                }else{
                    broadcast.apply(child, [componentName, eventName].concat(params));
                }
            })
        }
    }
}