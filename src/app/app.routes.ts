import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'basic',
        pathMatch:'full'
    },
    {
        path:'basic',
        loadComponent: () =>
            import('./basic/basic/basic.component')
        .then(m => m.BasicComponent),

        children: [
            {
                path: '',
                redirectTo: 'interpolation',
                pathMatch: 'full'
            },

            {
                path: 'interpolation',
                loadComponent: () =>
                    import('./basic/interpolation/interpolation.component')
                .then(m => m.InterpolationComponent)
            },

            {
                path: 'property-binding',
                loadComponent: () =>
                    import('./basic/property-binding/property-binding.component')
                .then(m => m.PropertyBindingComponent)
            },

            {
                path: 'event-binding',
                loadComponent: () =>
                    import('./basic/event-binding/event-binding.component')
                .then(m => m.EventBindingComponent)
            },

            {
                path: 'two-way-binding',
                loadComponent: () =>
                    import('./basic/two-way-binding/two-way-binding.component')
                .then(m => m.TwoWayBindingComponent)
            },

            {
                path: 'control-flow',
                loadComponent: () => 
                    import('./basic/control-flow/control-flow.component')
                .then(m => m.ControlFlowComponent)
            },

            {
                path: 'lifecycle',
                loadComponent: () =>
                    import('./basic/lifecycle/lifecycle.component')
                .then(m => m.LifecycleComponent)
            },

            {
                path: 'pipes',
                loadComponent: () =>
                    import('./basic/pipes/pipes.component')
                .then(m => m.PipesComponent)
            }
        ]
    },

    {
        path: 'intermediate',
        loadComponent: () =>
            import('./intermediate/intermediate/intermediate.component')
        .then(m => m.IntermediateComponent)
    }
];
