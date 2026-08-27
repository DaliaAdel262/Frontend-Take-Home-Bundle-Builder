import type { Product } from '../types/productType'

import wyzeCamV4WhiteVariant from '../assets/images/products/wyze-cam-v4-white-variant.png'
import wyzeCamV4GreyVariant from '../assets/images/products/wyze-cam-v4-grey-variant.png'
import wyzeCamV4BlackVariant from '../assets/images/products/wyze-cam-v4-black-variant.png'

import wyzeCamPanV3WhiteVariant from '../assets/images/products/wyze-cam-pan-v3-white-variant.png'
import wyzeCamPanV3BlackVariant from '../assets/images/products/wyze-cam-pan-v3-black-variant.png'

import wyzeCamFloodlightV2WhiteVariant from '../assets/images/products/wyze-cam-floodlight-v2-white-variant.png'
import wyzeCamFloodlightV2BlackVariant from '../assets/images/products/wyze-cam-floodlight-v2-black-variant.png'

import wyzeDuoCamDoorbell from '../assets/images/products/wyze-duo-cam-doorbell.png'
import wyzeBatteryCamProWhiteVariant from '../assets/images/products/wyze-battery-cam-pro-white-variant.png'
import wyzeBatteryCamProBlackVariant from '../assets/images/products/wyze-battery-cam-pro-black-variant.png'

import wyzeSenseMotionSensor from '../assets/images/products/wyze-sense-motion-sensor.png'
import wyzeSenseHub from '../assets/images/products/wyze-sense-hub.png'
import wyzeMicroSdCard from '../assets/images/products/wyze-micro-SD card.png'

export const products: Product[] = [
    {
        id: 'wyze-cam-v4',
        category: 'camera',
        title: 'Wyze Cam v4',
        description: 'The clearest Wyze Cam ever made.',
        learnMoreUrl: '#',
        image: wyzeCamV4WhiteVariant,
        variants: [
            { id: 'wyze-cam-v4-white', name: 'White', image: wyzeCamV4WhiteVariant },
            { id: 'wyze-cam-v4-grey', name: 'Grey', image: wyzeCamV4GreyVariant },
            { id: 'wyze-cam-v4-black', name: 'Black', image: wyzeCamV4BlackVariant },
        ],
        price: 35.98,
        discountedPrice: 27.98,
        discountBadge: 'Save 22%',
    },
    {
        id: 'wyze-cam-pan-v3',
        category: 'camera',
        title: 'Wyze Cam Pan v3',
        description: '360° pan and 180° tilt security camera.',
        learnMoreUrl: '#',
        image: wyzeCamPanV3WhiteVariant,
        variants: [
            { id: 'wyze-cam-pan-v3-white', name: 'White', image: wyzeCamPanV3WhiteVariant },
            { id: 'wyze-cam-pan-v3-black', name: 'Black', image: wyzeCamPanV3BlackVariant },
        ],
        price: 39.98,
        discountedPrice: 34.98,
        discountBadge: 'Save 12%',
    },
    {
        id: 'wyze-cam-floodlight-v2',
        category: 'camera',
        title: 'Wyze Cam Floodlight v2',
        description: '2K floodlight camera with a 160° wide-angle view for your garage.',
        learnMoreUrl: '#',
        image: wyzeCamFloodlightV2WhiteVariant,
        variants: [
            { id: 'wyze-cam-floodlight-v2-white', name: 'White', image: wyzeCamFloodlightV2WhiteVariant },
            { id: 'wyze-cam-floodlight-v2-black', name: 'Black', image: wyzeCamFloodlightV2BlackVariant },
        ],
        price: 89.98,
        discountedPrice: 69.98,
        discountBadge: 'Save 22%',
    },
    {
        id: 'wyze-duo-cam-doorbell',
        category: 'camera',
        title: 'Wyze Duo Cam Doorbell',
        description: 'Two cameras. Two views. Double the porch protection.',
        learnMoreUrl: '#',
        image: wyzeDuoCamDoorbell,
        price: 69.98,
    },
    {
        id: 'wyze-battery-cam-pro',
        category: 'camera',
        title: 'Wyze Battery Cam Pro',
        description: 'Protect anywhere. See everything in 2.5K HDR. No power outlet or electrician needed.',
        learnMoreUrl: '#',
        image: wyzeBatteryCamProWhiteVariant,
        variants: [
            { id: 'wyze-battery-cam-pro-white', name: 'White', image: wyzeBatteryCamProWhiteVariant },
            { id: 'wyze-battery-cam-pro-black', name: 'Black', image: wyzeBatteryCamProBlackVariant },
        ],
        price: 89.98,
    },
    {
        id: 'wyze-sense-motion-sensor',
        category: 'sensor',
        title: 'Wyze Sense Motion Sensor',
        image: wyzeSenseMotionSensor,
        price: 59.98,
    },
    {
        id: 'wyze-sense-hub',
        category: 'sensor',
        title: 'Wyze Sense Hub (Required)',
        image: wyzeSenseHub,
        price: 29.92,
        discountedPrice: 0,
        discountBadge: 'FREE',
        isRequired: true,
    },
    {
        id: 'wyze-microsd-256gb',
        category: 'accessory',
        title: 'Wyze MicroSD Card (256GB)',
        image: wyzeMicroSdCard,
        price: 41.96,
    },
    {
        id: 'wyze-cam-unlimited-plan',
        category: 'plan',
        title: 'Cam Unlimited',
        icon: 'icon-plan',
        billingPeriod: 'monthly',
        price: 12.99,
        discountedPrice: 9.99,
        maxQuantity: 1,
    },
]

// Lookup map used in review panel to get product details by product id 
export const productsById = new Map(products.map((product) => [product.id, product]))
