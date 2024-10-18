import { useTranslation } from 'react-i18next'

import figure1 from '@/assets/figure1.png'
import figure2 from '@/assets/figure2.png'
import figure3 from '@/assets/figure3.png'
import Section from '@/components/Section'
import { Button } from '@/components/ui/button'
import { useAppDispatch } from '@/hooks/use-redux'
import { resetModel } from '@/redux/slices/modelSlice'
import { useNavigate } from 'react-router-dom'

const MainPage = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const sections = [...Array(3)].map((_, index) => (
    <Section
      key={t(`mainPage.section${index + 1}.number`)}
      sectionNumber={t(`mainPage.section${index + 1}.number`)}
      header={t(`mainPage.section${index + 1}.header`)}
      body={t(`mainPage.section${index + 1}.body`)}
    />
  ))

  const onCreateModelButtonClick = () => {
    dispatch(resetModel())
    navigate('/model')
  }

  return (
    <div className="mx-auto flex h-full w-full max-w-7xl flex-col items-center pt-10 md:pt-16">
      <div className="max-w-[50rem] space-y-4">
        <div>
          <h1 className="text-center text-4xl font-semibold">{t('mainPage.headerPart1')}</h1>
          <h1 className="text-center text-4xl font-semibold">{t('mainPage.headerPart2')}</h1>
        </div>
        <h3 className="mx-auto w-[85%] text-center text-lg">{t('mainPage.subHeader')}</h3>
      </div>

      <Button data-testid="createModelButton" onClick={onCreateModelButtonClick} className="mt-10 rounded-3xl px-5">
        {t('mainPage.createModelButton')}
      </Button>

      <div className="flex w-full select-none justify-between pt-16 md:px-10">
        <div className="relative aspect-square flex-1">
          <img
            draggable={false}
            src={figure1}
            alt="figure1"
            className="absolute -top-20 h-full w-full object-scale-down"
          />
        </div>
        <div className="aspect-square flex-1">
          <img draggable={false} src={figure2} alt="figure2" className="h-full w-full object-scale-down" />
        </div>
        <div className="relative aspect-square flex-1">
          <img
            draggable={false}
            src={figure3}
            alt="figure3"
            className="absolute -top-28 h-full w-full object-scale-down"
          />
        </div>
      </div>

      <div className="max-w-[50rem] space-y-4 pt-20">
        <h1 className="text-center text-4xl font-semibold">{t('mainPage.programFeaturesHeader')}</h1>
        <h3 className="mx-auto w-[85%] text-center text-lg">{t('mainPage.programFeaturesSubHeader')}</h3>
      </div>

      <div className="flex w-full flex-col justify-between gap-10 p-10 pt-20 md:flex-row">{sections}</div>
    </div>
  )
}

export default MainPage
