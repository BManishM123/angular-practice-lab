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
        path:'',
        redirectTo:'intermediate',
        pathMatch:'full'
    },

    {
        path: 'intermediate',
        loadComponent: () =>
            import('./intermediate/intermediate/intermediate.component')
        .then(m => m.IntermediateComponent),

        children: [
            {
                path: '',
                loadComponent: () =>
                    import('./intermediate/services/services.component')
                .then(m => m.ServicesComponent)

            },

            {
                path: 'service',
                loadComponent: () => 
                    import('./intermediate/services/services.component')
                .then(m => m.ServicesComponent)
            },

            {
                path: 'reactive-forms',
                loadComponent: () => 
                    import('./intermediate/reactive-forms/employee-registration/employee-registration.component')
                .then(m => m.EmployeeRegistrationComponent)
            },

            {
                path: 'dynamic-forms',
                loadComponent: () =>
                    import('./intermediate/dynamic-forms/skills-matrix/skills-matrix.component')
                .then(m => m.SkillsMatrixComponent)
            },

            {
                path: 'dep-inj',
                loadComponent: () =>
                    import('./intermediate/dependency-injection/notification/notification.component')
                .then(m => m.NotificationComponent)
            }
        ]
    }
    
];
