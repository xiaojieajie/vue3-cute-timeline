export interface IBaseProps {
  bgColor?: string
  lineColor?: string
  hollow?: boolean
  iconSize?: string
  fontColor?: string
}

export const useInit = (props: IBaseProps) => {
  const othersRef = ref<HTMLElement>()
  const slotOthers = ref(false)
  const iconSizeData = reactive<any>({
    small: {
      top: '.28em', left: '-34px', width: '10px', height: '10px'
    },
    medium: {
      top: '0em', left: '-39.5px', height: '20px', width: '20px'
    },
    large: {
      top: '-0.5em', left: '-44px', height: '30px', width: '30px'
    }
  })

  const circleStyle = computed(() => {
    if (!props.bgColor && !props.lineColor && !props.hollow && !props.iconSize) return
    let style: any = {}
    if (props.bgColor) {
      style = {
        'border-color': props.bgColor,
        'background-color': props.bgColor
      }
    }
    if (props.lineColor)
      style['border-color'] = props.lineColor
    if (iconSizeData[props.iconSize!])
      style = Object.assign({}, style, iconSizeData[props.iconSize!])

    return style
  })

  const itemStyle = computed(() => {
    return {
      color: props.fontColor
    }
  })

  const slotClass = computed(() => {
    let className = ''
    slotOthers.value && (className = 'timeline-others')
    props.hollow && (className = 'hollow')
    return className
  })

  onMounted(() => {
    slotOthers.value = !!othersRef.value!.innerHTML
  })

  return { circleStyle, itemStyle, slotClass, othersRef }
}
