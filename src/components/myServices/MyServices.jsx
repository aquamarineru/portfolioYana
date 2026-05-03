import React, {useEffect, useMemo, useState} from 'react'
import MyServicesItems from './MyServicesItems'

const SERVICE_KEY_ALIASES = {
  portraits: 'portrait',
  'hotels and foods': 'hospitality',
  'hotel and food': 'hospitality',
  products: 'hospitality',
}

const normalizeServiceKey = (value) => {
  const key = (value || '').trim().toLowerCase()

  return SERVICE_KEY_ALIASES[key] || key
}

const getServiceKey = (service) => normalizeServiceKey(service?.name || service?.title)

const getUniqueServices = (services = []) => {
  const uniqueServices = new Map()

  services
    .filter((service) => service?._id && !service._id.startsWith('drafts.') && service.hideFromWebsite !== true)
    .forEach((service) => {
      const key = getServiceKey(service)

      if (key && !uniqueServices.has(key)) {
        uniqueServices.set(key, service)
      }
    })

  return Array.from(uniqueServices.values())
}

const MyServices = ({servicesData, sectionText}) => {
  const services = useMemo(() => getUniqueServices(servicesData), [servicesData])
  const [activeKey, setActiveKey] = useState('')
  const description = sectionText?.myServicesDescription ?? 'what I offer'

  useEffect(() => {
    if (!services.length) {
      setActiveKey('')
      return
    }

    const hasActiveService = services.some((service) => getServiceKey(service) === activeKey)

    if (!hasActiveService) {
      setActiveKey(getServiceKey(services[0]))
    }
  }, [activeKey, services])

  const activeService = services.find((service) => getServiceKey(service) === activeKey) || services[0]

  if (!servicesData) {
    return <div>Loading...</div>
  }

  return (
    <div className="pt-24 px-7 md:m-0" id="services">
      <h2 className="font-nanum text-2xl text-tomatoes text-center md:text-4xl lg:text-5xl font-bold uppercase">
        My services
      </h2>
      <h3 className="font-tomatoes text-xl text-dark dark:text-light text-center font-bold md:text-2xl">
        {description}
      </h3>
      <div className="pt-16 flex flex-col items-center justify-center md:flex-row md:items-start md:justify-around lg:justify-center">
        <div className="space-y-4 pt-5 lg:px-32 font-nanum uppercase relative text-dark dark:text-light">
          {services.map((service) => {
            const serviceKey = getServiceKey(service)
            const isActive = serviceKey === getServiceKey(activeService)

            return (
              <button
                type="button"
                onClick={() => setActiveKey(serviceKey)}
                key={service._id}
                className={`block cursor-pointer appearance-none border-0 bg-transparent p-0 text-left font-nanum uppercase ${isActive ? 'text-tomatoes before-element relative' : ''}`}
              >
                {service.title}
              </button>
            )
          })}
        </div>
        <div className="w-full md:w-auto">
          {activeService && <MyServicesItems key={activeService._id} item={activeService} />}
        </div>
      </div>
    </div>
  )
}

export default MyServices
