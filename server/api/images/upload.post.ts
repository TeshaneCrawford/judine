export default eventHandler(async (event) => {
  return hubBlob().handleUpload(event, {
    multiple: false,
    maxSize: '32MB',
    types: ['image/png', 'image/jpeg', 'image/webp', 'image/gif', 'image/heic', 'image/jpg']
  })
})