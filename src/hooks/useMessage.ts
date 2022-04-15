<<<<<<< HEAD
import { useToast } from '@chakra-ui/react'
import { useCallback } from 'react'
=======
import { useCallback } from 'react'
import { useToast } from '@chakra-ui/react'
>>>>>>> restart-branch

interface Props {
  title: string
  status: 'info' | 'warning' | 'success' | 'error'
}

export const useMessage = () => {
  const toast = useToast()

<<<<<<< HEAD
=======
  /**
   *受け取ったpropsを元にフラッシュメッセージ(toast)を表示させる
   *@param {String} title 表示させたいメッセージ
   *@param {String} status 表示させたいメッセージのステータス
   */
>>>>>>> restart-branch
  const showMessage = useCallback(
    (props: Props) => {
      const { title, status } = props
      toast({
        title,
        status,
        position: 'top',
        duration: 2000,
        isClosable: true,
      })
    },
    [toast]
  )
  return { showMessage }
}
