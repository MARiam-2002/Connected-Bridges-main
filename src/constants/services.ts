import { 
    Columns3Cog, 
    DraftingCompass, 
    PencilRuler, 
    Store, 
    ShieldCheck, 
    Radar, 
    Camera, 
    Drone, 
    Waves, 
    Network, 
    Signal, 
    LayoutGrid, 
    Tv, 
    Combine, 
    ClipboardList, 
    MonitorCog,
    Video,
    UserCheck,
    Siren,
    View,
    PhoneCall,
    Building,
    Users,
    GlobeLock,
    Gavel,
    ClipboardCheck,
    ListTodo,
    GraduationCap,
    BrainCircuit
} from "lucide-react";
import { ROUTES } from "./routes";
import { BsBuildings, BsHouseUp } from "react-icons/bs";
import { LuLayoutDashboard, LuPlaneTakeoff } from "react-icons/lu";
import { PiOfficeChair, PiPaintBrushBroad } from "react-icons/pi";
// import { CiShop } from "react-icons/ci";
import { MdOutlineEventNote, MdOutlineHeadsetMic } from "react-icons/md";
import type { TFunction } from "i18next";

export const AllServicesData = (t: TFunction) => [

    {
        id: 1,
        title: 'all-services.services.design_build_solutions',
        description: 'all-services.services.design_build_solutions_description',
        icon: DraftingCompass,
        link: `${ROUTES.SERVICES_ROUTE}/${t('all-services.services.design_build_solutions').toLowerCase().replace(/ /g, '-')}/1`,
        services: [
            {
                id: 1,
                title: 'all-services.services.design_build_solutions_services.interior-design-title',
                description: 'all-services.services.design_build_solutions_services.interior-design-description',
                icon: PiPaintBrushBroad,
            },
            {
                id: 2,
                title: 'all-services.services.design_build_solutions_services.office-furniture-title',
                description: 'all-services.services.design_build_solutions_services.office-furniture-description',
                icon: PiOfficeChair,
            },
            {
                id: 3,
                title: 'all-services.services.design_build_solutions_services.airport-furniture-title',
                description: 'all-services.services.design_build_solutions_services.airport-furniture-description',
                icon: LuPlaneTakeoff,
            },
            {
                id: 4,
                title: 'all-services.services.design_build_solutions_services.shops-home-finishing-title',
                description: 'all-services.services.design_build_solutions_services.shops-home-finishing-description',
                icon: Store,
            },
            {
                id: 5,
                title: 'all-services.services.design_build_solutions_services.event-organization-management-title',
                description: 'all-services.services.design_build_solutions_services.event-organization-management-description',
                icon: MdOutlineEventNote,
            },
            {
                id: 6,
                title: 'all-services.services.design_build_solutions_services.general-contracting-title',
                description: 'all-services.services.design_build_solutions_services.general-contracting-description',
                icon: PencilRuler,
            },
            {
                id: 7,
                title: 'all-services.services.design_build_solutions_services.construction-consulting-title',
                description: 'all-services.services.design_build_solutions_services.construction-consulting-description',
                icon: MdOutlineHeadsetMic,
            },
            {
                id: 8,
                title: 'all-services.services.design_build_solutions_services.special-projects-title',
                description: 'all-services.services.design_build_solutions_services.special-projects-description',
                icon: Columns3Cog,
            },
            {
                id: 9,
                title: 'all-services.services.design_build_solutions_services.house-renovation-title',
                description: 'all-services.services.design_build_solutions_services.house-renovation-description',
                icon: BsHouseUp,
            },
            {
                id: 10,
                title: 'all-services.services.design_build_solutions_services.tiling-painting-flooring-title',
                description: 'all-services.services.design_build_solutions_services.tiling-painting-flooring-description',
                icon: LuLayoutDashboard,
            },
            {
                id: 11,
                title: 'all-services.services.design_build_solutions_services.modular-solutions-title',
                description: 'all-services.services.design_build_solutions_services.modular-solutions-description',
                icon: BsBuildings,
            },
        ]
    },

    {
        id: 2,
        title: 'all-services.services.ai_surveillance_systems',
        description: 'all-services.services.ai_surveillance_systems_description',
        icon: BrainCircuit,
        link: `${ROUTES.SERVICES_ROUTE}/${t('all-services.services.ai_surveillance_systems').toLowerCase().replace(/ /g, '-')}/2`,
        services: [
            {
                id: 1,
                title: 'all-services.services.ai_surveillance_systems_services.long-range-radars-title',
                description: 'all-services.services.ai_surveillance_systems_services.long-range-radars-description',
                icon: Radar,
            },
            {
                id: 2,
                title: 'all-services.services.ai_surveillance_systems_services.high-resolution-cameras-title',
                description: 'all-services.services.ai_surveillance_systems_services.high-resolution-cameras-description',
                icon: Camera,
            },
            {
                id: 3,
                title: 'all-services.services.ai_surveillance_systems_services.drone-uav-integration-title',
                description: 'all-services.services.ai_surveillance_systems_services.drone-uav-integration-description',
                icon: Drone,
            },
            {
                id: 4,
                title: 'all-services.services.ai_surveillance_systems_services.sonar-systems-title',
                description: 'all-services.services.ai_surveillance_systems_services.sonar-systems-description',
                icon: Waves,
            },
            {
                id: 5,
                title: 'all-services.services.ai_surveillance_systems_services.c4isr-platforms-title',
                description: 'all-services.services.ai_surveillance_systems_services.c4isr-platforms-description',
                icon: Network,
            },
            {
                id: 6,
                title: 'all-services.services.ai_surveillance_systems_services.secured-communication-networks-title',
                description: 'all-services.services.ai_surveillance_systems_services.secured-communication-networks-description',
                icon: Signal,
            },
            {
                id: 7,
                title: 'all-services.services.ai_surveillance_systems_services.situational-awareness-dashboards-title',
                description: 'all-services.services.ai_surveillance_systems_services.situational-awareness-dashboards-description',
                icon: LuLayoutDashboard,
            },
        ]
    },

    {
        id: 3,
        title: 'all-services.services.command_control_centers',
        description: 'all-services.services.command_control_centers_description',
        icon: MonitorCog,
        link: `${ROUTES.SERVICES_ROUTE}/${t('all-services.services.command_control_centers').toLowerCase().replace(/ /g, '-')}/3`,
        services: [
            {
                id: 1,
                title: 'all-services.services.command_control_centers_services.design-of-operation-rooms-title',
                description: 'all-services.services.command_control_centers_services.design-of-operation-rooms-description',
                icon: LayoutGrid,
            },
            {
                id: 2,
                title: 'all-services.services.command_control_centers_services.high-reliability-video-walls-title',
                description: 'all-services.services.command_control_centers_services.high-reliability-video-walls-description',
                icon: Tv,
            },
            {
                id: 3,
                title: 'all-services.services.command_control_centers_services.systems-integration-title',
                description: 'all-services.services.command_control_centers_services.systems-integration-description',
                icon: Combine,
            },
            {
                id: 4,
                title: 'all-services.services.command_control_centers_services.event-management-procedures-title',
                description: 'all-services.services.command_control_centers_services.event-management-procedures-description',
                icon: ClipboardList,
            },
        ]
    },

    {
        id: 4,
        title: 'all-services.services.smart_security_systems',
        description: 'all-services.services.smart_security_systems_description',
        icon: GlobeLock,
        link: `${ROUTES.SERVICES_ROUTE}/${t('all-services.services.smart_security_systems').toLowerCase().replace(/ /g, '-')}/4`,
        services: [
            {
                id: 1,
                title: 'all-services.services.smart_security_systems_services.cctv-ai-video-analytics-title',
                description: 'all-services.services.smart_security_systems_services.cctv-ai-video-analytics-description',
                icon: Video,
            },
            {
                id: 2,
                title: 'all-services.services.smart_security_systems_services.access-control-title',
                description: 'all-services.services.smart_security_systems_services.access-control-description',
                icon: UserCheck,
            },
            {
                id: 3,
                title: 'all-services.services.smart_security_systems_services.early-warning-intrusion-detection-title',
                description: 'all-services.services.smart_security_systems_services.early-warning-intrusion-detection-description',
                icon: Siren,
            },
            {
                id: 4,
                title: 'all-services.services.smart_security_systems_services.psim-3d-psim-title',
                description: 'all-services.services.smart_security_systems_services.psim-3d-psim-description',
                icon: View,
            },
        ]
    },

    {
        id: 5,
        title: 'all-services.services.emergency_critical_communications',
        description: 'all-services.services.emergency_critical_communications_description',
        icon: PhoneCall,
        link: `${ROUTES.SERVICES_ROUTE}/${t('all-services.services.emergency_critical_communications').toLowerCase().replace(/ /g, '-')}/5`,
        services: [
            {
                id: 1,
                title: 'all-services.services.emergency_critical_communications_services.establishment-operation-911-centers-title',
                description: 'all-services.services.emergency_critical_communications_services.establishment-operation-911-centers-description',
                icon: Building,
            },
            {
                id: 2,
                title: 'all-services.services.emergency_critical_communications_services.integrated-communications-title',
                description: 'all-services.services.emergency_critical_communications_services.integrated-communications-description',
                icon: Users,
            },
            {
                id: 3,
                title: 'all-services.services.emergency_critical_communications_services.training-personnel-managing-operations-title',
                description: 'all-services.services.emergency_critical_communications_services.training-personnel-managing-operations-description',
                icon: ClipboardList,
            },
        ]
    },

    {
        id: 6,
        title: 'all-services.services.security_consulting_operations',
        description: 'all-services.services.security_consulting_operations_description',
        icon: ShieldCheck,
        link: `${ROUTES.SERVICES_ROUTE}/${t('all-services.services.security_consulting_operations').toLowerCase().replace(/ /g, '-')}/6`,
        services: [
            {
                id: 1,
                title: 'all-services.services.security_consulting_operations_services.security-policies-procedures-governance-title',
                description: 'all-services.services.security_consulting_operations_services.security-policies-procedures-governance-description',
                icon: Gavel,
            },
            {
                id: 2,
                title: 'all-services.services.security_consulting_operations_services.conops-operational-readiness-plans-title',
                description: 'all-services.services.security_consulting_operations_services.conops-operational-readiness-plans-description',
                icon: ClipboardCheck,
            },
            {
                id: 3,
                title: 'all-services.services.security_consulting_operations_services.management-operation-security-systems-projects-title',
                description: 'all-services.services.security_consulting_operations_services.management-operation-security-systems-projects-description',
                icon: ListTodo,
            },
            {
                id: 4,
                title: 'all-services.services.security_consulting_operations_services.training-capacity-building-title',
                description: 'all-services.services.security_consulting_operations_services.training-capacity-building-description',
                icon: GraduationCap,
            },
        ]
    },

];
