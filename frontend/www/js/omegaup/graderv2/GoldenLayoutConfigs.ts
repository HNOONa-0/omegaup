import GoldenLayout from 'golden-layout';

export const UNEMBEDDED_CONFIG: GoldenLayout.Config = {
  settings: {
    showPopoutIcon: false,
  },
  content: [
    {
      type: 'row',
      content: [
        {
          type: 'column',
          id: 'main-column',
          content: [
            {
              type: 'stack',
              id: 'source-and-settings',
              content: [
                {
                  type: 'component',
                  componentName: 'monaco-editor-component',
                  componentState: {
                    storeMapping: {
                      contents: 'request.source',
                      language: 'request.language',
                      module: 'moduleName',
                    },
                    id: 'source',
                  },
                  isClosable: false,
                },
                {
                  type: 'component',
                  componentName: 'settings-component',
                  componentState: {
                    storeMapping: {},
                    id: 'settings',
                  },
                  isClosable: false,
                },
              ],
            },
            {
              type: 'stack',
              content: [
                {
                  type: 'component',
                  componentName: 'text-editor-component',
                  componentState: {
                    storeMapping: {
                      contents: 'compilerOutput',
                    },
                    readOnly: true,
                    module: 'compiler',
                    extension: 'out/err',
                    id: 'compiler',
                  },
                  isClosable: false,
                },
                {
                  type: 'component',
                  componentName: 'text-editor-component',
                  componentState: {
                    storeMapping: {
                      contents: 'logs',
                    },
                    readOnly: true,
                    module: 'logs',
                    extension: 'txt',
                    id: 'logs',
                  },
                  isClosable: false,
                },
                {
                  type: 'component',
                  componentName: 'zip-viewer-component',
                  componentState: {
                    storeMapping: {},
                    id: 'zipviewer',
                  },
                  isClosable: false,
                },
              ],
              height: 20,
            },
          ],
          isClosable: false,
        },
        {
          type: 'column',
          id: 'cases-column',
          content: [
            {
              type: 'row',
              content: [
                {
                  type: 'component',
                  componentName: 'text-editor-component',
                  componentState: {
                    storeMapping: {
                      contents: 'inputIn',
                      module: 'currentCase',
                    },
                    readOnly: false,
                    extension: 'in',
                    id: 'in',
                  },
                  isClosable: false,
                },
                {
                  type: 'component',
                  componentName: 'text-editor-component',
                  componentState: {
                    storeMapping: {
                      contents: 'inputOut',
                      module: 'currentCase',
                    },
                    readOnly: false,
                    extension: 'out',
                    id: 'out',
                  },
                  isClosable: false,
                },
              ],
            },
            {
              type: 'stack',
              content: [
                {
                  type: 'component',
                  componentName: 'text-editor-component',
                  componentState: {
                    storeMapping: {
                      contents: 'outputStdout',
                      module: 'currentCase',
                    },
                    readOnly: false,
                    extension: 'out',
                    id: 'stdout',
                  },
                  isClosable: false,
                },
                {
                  type: 'component',
                  componentName: 'text-editor-component',
                  componentState: {
                    storeMapping: {
                      contents: 'outputStderr',
                      module: 'currentCase',
                    },
                    readOnly: false,
                    extension: 'err',
                    id: 'stderr',
                  },
                  isClosable: false,
                },
                {
                  type: 'component',
                  componentName: 'monaco-diff-component',
                  componentState: {
                    storeMapping: {
                      originalContents: 'inputOut',
                      modifiedContents: 'outputStdout',
                    },
                    id: 'diff',
                  },
                  isClosable: false,
                },
              ],
            },
          ],
          isClosable: false,
        },
        {
          type: 'component',
          id: 'case-selector-column',
          componentName: 'case-selector-component',
          componentState: {
            storeMapping: {
              cases: 'request.input.cases',
              currentCase: 'currentCase',
            },
            id: 'cases',
          },
          title: 'cases/',
          width: 15,
          isClosable: false,
        },
      ],
    },
  ],
};
export const EMBEDDED_CONFIG: GoldenLayout.Config = {
  settings: {
    showPopoutIcon: false,
  },
  content: [
    {
      type: 'row',
      content: [
        {
          type: 'column',
          content: [
            {
              type: 'stack',
              id: 'source-and-logs',
              content: [
                {
                  type: 'column',
                  id: 'main-column',
                  title: 'code',
                  content: [
                    {
                      type: 'component',
                      componentName: 'monaco-editor-component',
                      componentState: {
                        storeMapping: {
                          contents: 'request.source',
                          language: 'request.language',
                          module: 'moduleName',
                        },
                        id: 'source',
                      },
                      isClosable: false,
                    },
                    {
                      type: 'stack',
                      content: [
                        {
                          type: 'component',
                          componentName: 'text-editor-component',
                          componentState: {
                            storeMapping: {
                              contents: 'compilerOutput',
                            },
                            readOnly: true,
                            module: 'compiler',
                            extension: 'out/err',
                            id: 'compiler',
                          },
                          isClosable: false,
                        },
                        {
                          type: 'component',
                          componentName: 'text-editor-component',
                          componentState: {
                            storeMapping: {
                              contents: 'logs',
                            },
                            readOnly: true,
                            module: 'logs',
                            extension: 'txt',
                            id: 'logs',
                          },
                          isClosable: false,
                        },
                        {
                          type: 'component',
                          componentName: 'zip-viewer-component',
                          componentState: {
                            storeMapping: {},
                            id: 'zipviewer',
                          },
                          title: 'files.zip',
                          isClosable: false,
                        },
                      ],
                      height: 20,
                    },
                  ],
                  isClosable: false,
                },
                {
                  type: 'column',
                  id: 'cases-column',
                  title: 'cases',
                  content: [
                    {
                      type: 'row',
                      content: [
                        {
                          type: 'component',
                          componentName: 'text-editor-component',
                          componentState: {
                            storeMapping: {
                              contents: 'inputIn',
                              module: 'currentCase',
                            },
                            readOnly: false,
                            extension: 'in',
                            id: 'in',
                          },
                          isClosable: false,
                        },
                        {
                          type: 'component',
                          componentName: 'text-editor-component',
                          componentState: {
                            storeMapping: {
                              contents: 'inputOut',
                              module: 'currentCase',
                            },
                            readOnly: false,
                            extension: 'out',
                            id: 'out',
                          },
                          isClosable: false,
                        },
                      ],
                    },
                    {
                      type: 'stack',
                      content: [
                        {
                          type: 'component',
                          componentName: 'text-editor-component',
                          componentState: {
                            storeMapping: {
                              contents: 'outputStdout',
                              module: 'currentCase',
                            },
                            readOnly: false,
                            extension: 'out',
                            id: 'stdout',
                          },
                          isClosable: false,
                        },
                        {
                          type: 'component',
                          componentName: 'text-editor-component',
                          componentState: {
                            storeMapping: {
                              contents: 'outputStderr',
                              module: 'currentCase',
                            },
                            readOnly: false,
                            extension: 'err',
                            id: 'stderr',
                          },
                          isClosable: false,
                        },
                        {
                          type: 'component',
                          componentName: 'monaco-diff-component',
                          componentState: {
                            storeMapping: {
                              originalContents: 'inputOut',
                              modifiedContents: 'outputStdout',
                            },
                            id: 'diff',
                          },
                          isClosable: false,
                        },
                      ],
                    },
                  ],
                  isClosable: false,
                },
              ],
            },
          ],
          isClosable: false,
        },
        {
          type: 'component',
          id: 'case-selector-column',
          componentName: 'case-selector-component',
          componentState: {
            storeMapping: {
              cases: 'request.input.cases',
              currentCase: 'currentCase',
            },
            id: 'cases',
          },
          title: 'cases/',
          width: 15,
          isClosable: false,
        },
      ],
    },
  ],
};
