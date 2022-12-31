"use client"

import { Icon as Iconify } from '@iconify/react'

export default function Icon({ icon, size, color, ...props }) {
  return <Iconify icon={icon} width={size} color={color} {...props} />
}