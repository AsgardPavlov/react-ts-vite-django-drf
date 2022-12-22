type IModifierType = string | { [container: string]: boolean };

type IBemType = Array<string | boolean | IModifierType>;

function useBem(namespace = ''): {
  bem: (...names: IBemType) => string;
  bemBlock: (modifiers?: IModifierType) => string;
  bemElement: (elementName: string, modifiers?: IModifierType) => string;
} {
  const applyModifiers = (entity: string, modifiers: string | any): string => {
    let result = [];
    result.push(entity);

    if (typeof modifiers === 'string') {
      result.push(entity + (modifiers ? `_${modifiers}` : ''));
    } else if (modifiers) {
      Object.keys(modifiers).forEach(key => {
        const value = modifiers[key];
        if (!value) {
          // Skip
        } else if (value === true) {
          result.push(`${entity}_${key}`);
        } else {
          result.push(`${entity}_${key}_${value}`);
        }
      });
    }

    result = result.map(cl => cl);
    return result.join(' ');
  };

  const bemBlock = (modifiers?: IModifierType): string => applyModifiers(namespace, modifiers);
  const bemElement = (elementName: string, modifiers?: IModifierType): string =>
    applyModifiers(`${namespace}__${elementName}`, modifiers);
  const bem = (...names: IBemType): string =>
    Array.prototype.slice
      .call(names)
      .filter(v => v)
      .join(' ');

  return {
    bem,
    bemBlock,
    bemElement,
  };
}

export default useBem;
