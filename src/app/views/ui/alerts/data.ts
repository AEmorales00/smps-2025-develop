export type AlertType = {
  message: string
  variant: string
  icon: string
}

export const alerts: AlertType[] = [
  {
    message: 'A simple primary alert — check it out!',
    variant: 'primary',
    icon: 'mdi-account-circle-outline',
  },
  {
    message: 'A simple secondary alert — check it out!',
    variant: 'secondary',
    icon: 'mdi-pencil-outline',
  },
  {
    message: 'A simple success alert — check it out!',
    variant: 'success',
    icon: 'mdi-check',
  },
  {
    message: 'A simple danger alert — check it out!',
    variant: 'danger',
    icon: 'mdi-bag-personal',
  },
  {
    message: 'A simple warning alert — check it out!',
    variant: 'warning',
    icon: 'mdi-alert-octagon-outline',
  },
  {
    message: 'A simple info alert — check it out!',
    variant: 'info',
    icon: 'mdi-triangle-outline',
  },
  {
    message: 'A simple light alert — check it out!',
    variant: 'light',
    icon: 'mdi-help-circle-outline',
  },
  {
    message: 'A simple dark alert — check it out!',
    variant: 'dark',
    icon: 'mdi-weather-night',
  },
]
