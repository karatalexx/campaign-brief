
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Campaign
 * 
 */
export type Campaign = $Result.DefaultSelection<Prisma.$CampaignPayload>
/**
 * Model Headline
 * 
 */
export type Headline = $Result.DefaultSelection<Prisma.$HeadlinePayload>
/**
 * Model Image
 * 
 */
export type Image = $Result.DefaultSelection<Prisma.$ImagePayload>
/**
 * Model Creative
 * 
 */
export type Creative = $Result.DefaultSelection<Prisma.$CreativePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Tone: {
  PROFESSIONAL: 'PROFESSIONAL',
  CASUAL: 'CASUAL',
  EXCITING: 'EXCITING',
  TRUSTWORTHY: 'TRUSTWORTHY'
};

export type Tone = (typeof Tone)[keyof typeof Tone]


export const GenerationStatus: {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED'
};

export type GenerationStatus = (typeof GenerationStatus)[keyof typeof GenerationStatus]

}

export type Tone = $Enums.Tone

export const Tone: typeof $Enums.Tone

export type GenerationStatus = $Enums.GenerationStatus

export const GenerationStatus: typeof $Enums.GenerationStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Campaigns
 * const campaigns = await prisma.campaign.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Campaigns
   * const campaigns = await prisma.campaign.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.campaign`: Exposes CRUD operations for the **Campaign** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Campaigns
    * const campaigns = await prisma.campaign.findMany()
    * ```
    */
  get campaign(): Prisma.CampaignDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.headline`: Exposes CRUD operations for the **Headline** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Headlines
    * const headlines = await prisma.headline.findMany()
    * ```
    */
  get headline(): Prisma.HeadlineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.image`: Exposes CRUD operations for the **Image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.image.findMany()
    * ```
    */
  get image(): Prisma.ImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.creative`: Exposes CRUD operations for the **Creative** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Creatives
    * const creatives = await prisma.creative.findMany()
    * ```
    */
  get creative(): Prisma.CreativeDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Campaign: 'Campaign',
    Headline: 'Headline',
    Image: 'Image',
    Creative: 'Creative'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "campaign" | "headline" | "image" | "creative"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Campaign: {
        payload: Prisma.$CampaignPayload<ExtArgs>
        fields: Prisma.CampaignFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CampaignFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CampaignFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          findFirst: {
            args: Prisma.CampaignFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CampaignFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          findMany: {
            args: Prisma.CampaignFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          create: {
            args: Prisma.CampaignCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          createMany: {
            args: Prisma.CampaignCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CampaignCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          delete: {
            args: Prisma.CampaignDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          update: {
            args: Prisma.CampaignUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          deleteMany: {
            args: Prisma.CampaignDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CampaignUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CampaignUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          upsert: {
            args: Prisma.CampaignUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          aggregate: {
            args: Prisma.CampaignAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampaign>
          }
          groupBy: {
            args: Prisma.CampaignGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampaignGroupByOutputType>[]
          }
          count: {
            args: Prisma.CampaignCountArgs<ExtArgs>
            result: $Utils.Optional<CampaignCountAggregateOutputType> | number
          }
        }
      }
      Headline: {
        payload: Prisma.$HeadlinePayload<ExtArgs>
        fields: Prisma.HeadlineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HeadlineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadlinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HeadlineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadlinePayload>
          }
          findFirst: {
            args: Prisma.HeadlineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadlinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HeadlineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadlinePayload>
          }
          findMany: {
            args: Prisma.HeadlineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadlinePayload>[]
          }
          create: {
            args: Prisma.HeadlineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadlinePayload>
          }
          createMany: {
            args: Prisma.HeadlineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HeadlineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadlinePayload>[]
          }
          delete: {
            args: Prisma.HeadlineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadlinePayload>
          }
          update: {
            args: Prisma.HeadlineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadlinePayload>
          }
          deleteMany: {
            args: Prisma.HeadlineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HeadlineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HeadlineUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadlinePayload>[]
          }
          upsert: {
            args: Prisma.HeadlineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadlinePayload>
          }
          aggregate: {
            args: Prisma.HeadlineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHeadline>
          }
          groupBy: {
            args: Prisma.HeadlineGroupByArgs<ExtArgs>
            result: $Utils.Optional<HeadlineGroupByOutputType>[]
          }
          count: {
            args: Prisma.HeadlineCountArgs<ExtArgs>
            result: $Utils.Optional<HeadlineCountAggregateOutputType> | number
          }
        }
      }
      Image: {
        payload: Prisma.$ImagePayload<ExtArgs>
        fields: Prisma.ImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findFirst: {
            args: Prisma.ImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findMany: {
            args: Prisma.ImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          create: {
            args: Prisma.ImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          createMany: {
            args: Prisma.ImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          delete: {
            args: Prisma.ImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          update: {
            args: Prisma.ImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          deleteMany: {
            args: Prisma.ImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          upsert: {
            args: Prisma.ImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          aggregate: {
            args: Prisma.ImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImage>
          }
          groupBy: {
            args: Prisma.ImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImageCountArgs<ExtArgs>
            result: $Utils.Optional<ImageCountAggregateOutputType> | number
          }
        }
      }
      Creative: {
        payload: Prisma.$CreativePayload<ExtArgs>
        fields: Prisma.CreativeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CreativeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreativePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CreativeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreativePayload>
          }
          findFirst: {
            args: Prisma.CreativeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreativePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CreativeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreativePayload>
          }
          findMany: {
            args: Prisma.CreativeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreativePayload>[]
          }
          create: {
            args: Prisma.CreativeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreativePayload>
          }
          createMany: {
            args: Prisma.CreativeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CreativeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreativePayload>[]
          }
          delete: {
            args: Prisma.CreativeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreativePayload>
          }
          update: {
            args: Prisma.CreativeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreativePayload>
          }
          deleteMany: {
            args: Prisma.CreativeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CreativeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CreativeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreativePayload>[]
          }
          upsert: {
            args: Prisma.CreativeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreativePayload>
          }
          aggregate: {
            args: Prisma.CreativeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCreative>
          }
          groupBy: {
            args: Prisma.CreativeGroupByArgs<ExtArgs>
            result: $Utils.Optional<CreativeGroupByOutputType>[]
          }
          count: {
            args: Prisma.CreativeCountArgs<ExtArgs>
            result: $Utils.Optional<CreativeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    campaign?: CampaignOmit
    headline?: HeadlineOmit
    image?: ImageOmit
    creative?: CreativeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CampaignCountOutputType
   */

  export type CampaignCountOutputType = {
    headlines: number
    images: number
    creatives: number
  }

  export type CampaignCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    headlines?: boolean | CampaignCountOutputTypeCountHeadlinesArgs
    images?: boolean | CampaignCountOutputTypeCountImagesArgs
    creatives?: boolean | CampaignCountOutputTypeCountCreativesArgs
  }

  // Custom InputTypes
  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignCountOutputType
     */
    select?: CampaignCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeCountHeadlinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HeadlineWhereInput
  }

  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
  }

  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeCountCreativesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreativeWhereInput
  }


  /**
   * Count Type HeadlineCountOutputType
   */

  export type HeadlineCountOutputType = {
    creatives: number
  }

  export type HeadlineCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creatives?: boolean | HeadlineCountOutputTypeCountCreativesArgs
  }

  // Custom InputTypes
  /**
   * HeadlineCountOutputType without action
   */
  export type HeadlineCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeadlineCountOutputType
     */
    select?: HeadlineCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HeadlineCountOutputType without action
   */
  export type HeadlineCountOutputTypeCountCreativesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreativeWhereInput
  }


  /**
   * Count Type ImageCountOutputType
   */

  export type ImageCountOutputType = {
    creatives: number
  }

  export type ImageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creatives?: boolean | ImageCountOutputTypeCountCreativesArgs
  }

  // Custom InputTypes
  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageCountOutputType
     */
    select?: ImageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeCountCreativesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreativeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Campaign
   */

  export type AggregateCampaign = {
    _count: CampaignCountAggregateOutputType | null
    _avg: CampaignAvgAggregateOutputType | null
    _sum: CampaignSumAggregateOutputType | null
    _min: CampaignMinAggregateOutputType | null
    _max: CampaignMaxAggregateOutputType | null
  }

  export type CampaignAvgAggregateOutputType = {
    id: number | null
  }

  export type CampaignSumAggregateOutputType = {
    id: number | null
  }

  export type CampaignMinAggregateOutputType = {
    id: number | null
    name: string | null
    industry: string | null
    targetAudience: string | null
    tone: $Enums.Tone | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CampaignMaxAggregateOutputType = {
    id: number | null
    name: string | null
    industry: string | null
    targetAudience: string | null
    tone: $Enums.Tone | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CampaignCountAggregateOutputType = {
    id: number
    name: number
    industry: number
    targetAudience: number
    tone: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CampaignAvgAggregateInputType = {
    id?: true
  }

  export type CampaignSumAggregateInputType = {
    id?: true
  }

  export type CampaignMinAggregateInputType = {
    id?: true
    name?: true
    industry?: true
    targetAudience?: true
    tone?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CampaignMaxAggregateInputType = {
    id?: true
    name?: true
    industry?: true
    targetAudience?: true
    tone?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CampaignCountAggregateInputType = {
    id?: true
    name?: true
    industry?: true
    targetAudience?: true
    tone?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CampaignAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaign to aggregate.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Campaigns
    **/
    _count?: true | CampaignCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CampaignAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CampaignSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampaignMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampaignMaxAggregateInputType
  }

  export type GetCampaignAggregateType<T extends CampaignAggregateArgs> = {
        [P in keyof T & keyof AggregateCampaign]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampaign[P]>
      : GetScalarType<T[P], AggregateCampaign[P]>
  }




  export type CampaignGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignWhereInput
    orderBy?: CampaignOrderByWithAggregationInput | CampaignOrderByWithAggregationInput[]
    by: CampaignScalarFieldEnum[] | CampaignScalarFieldEnum
    having?: CampaignScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampaignCountAggregateInputType | true
    _avg?: CampaignAvgAggregateInputType
    _sum?: CampaignSumAggregateInputType
    _min?: CampaignMinAggregateInputType
    _max?: CampaignMaxAggregateInputType
  }

  export type CampaignGroupByOutputType = {
    id: number
    name: string
    industry: string
    targetAudience: string
    tone: $Enums.Tone
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: CampaignCountAggregateOutputType | null
    _avg: CampaignAvgAggregateOutputType | null
    _sum: CampaignSumAggregateOutputType | null
    _min: CampaignMinAggregateOutputType | null
    _max: CampaignMaxAggregateOutputType | null
  }

  type GetCampaignGroupByPayload<T extends CampaignGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampaignGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampaignGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampaignGroupByOutputType[P]>
            : GetScalarType<T[P], CampaignGroupByOutputType[P]>
        }
      >
    >


  export type CampaignSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    industry?: boolean
    targetAudience?: boolean
    tone?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    headlines?: boolean | Campaign$headlinesArgs<ExtArgs>
    images?: boolean | Campaign$imagesArgs<ExtArgs>
    creatives?: boolean | Campaign$creativesArgs<ExtArgs>
    _count?: boolean | CampaignCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    industry?: boolean
    targetAudience?: boolean
    tone?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    industry?: boolean
    targetAudience?: boolean
    tone?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectScalar = {
    id?: boolean
    name?: boolean
    industry?: boolean
    targetAudience?: boolean
    tone?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CampaignOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "industry" | "targetAudience" | "tone" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["campaign"]>
  export type CampaignInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    headlines?: boolean | Campaign$headlinesArgs<ExtArgs>
    images?: boolean | Campaign$imagesArgs<ExtArgs>
    creatives?: boolean | Campaign$creativesArgs<ExtArgs>
    _count?: boolean | CampaignCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CampaignIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CampaignIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CampaignPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Campaign"
    objects: {
      headlines: Prisma.$HeadlinePayload<ExtArgs>[]
      images: Prisma.$ImagePayload<ExtArgs>[]
      creatives: Prisma.$CreativePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      industry: string
      targetAudience: string
      tone: $Enums.Tone
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["campaign"]>
    composites: {}
  }

  type CampaignGetPayload<S extends boolean | null | undefined | CampaignDefaultArgs> = $Result.GetResult<Prisma.$CampaignPayload, S>

  type CampaignCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CampaignFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CampaignCountAggregateInputType | true
    }

  export interface CampaignDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Campaign'], meta: { name: 'Campaign' } }
    /**
     * Find zero or one Campaign that matches the filter.
     * @param {CampaignFindUniqueArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampaignFindUniqueArgs>(args: SelectSubset<T, CampaignFindUniqueArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Campaign that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CampaignFindUniqueOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampaignFindUniqueOrThrowArgs>(args: SelectSubset<T, CampaignFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campaign that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampaignFindFirstArgs>(args?: SelectSubset<T, CampaignFindFirstArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campaign that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampaignFindFirstOrThrowArgs>(args?: SelectSubset<T, CampaignFindFirstOrThrowArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Campaigns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Campaigns
     * const campaigns = await prisma.campaign.findMany()
     * 
     * // Get first 10 Campaigns
     * const campaigns = await prisma.campaign.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const campaignWithIdOnly = await prisma.campaign.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CampaignFindManyArgs>(args?: SelectSubset<T, CampaignFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Campaign.
     * @param {CampaignCreateArgs} args - Arguments to create a Campaign.
     * @example
     * // Create one Campaign
     * const Campaign = await prisma.campaign.create({
     *   data: {
     *     // ... data to create a Campaign
     *   }
     * })
     * 
     */
    create<T extends CampaignCreateArgs>(args: SelectSubset<T, CampaignCreateArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Campaigns.
     * @param {CampaignCreateManyArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaign = await prisma.campaign.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CampaignCreateManyArgs>(args?: SelectSubset<T, CampaignCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Campaigns and returns the data saved in the database.
     * @param {CampaignCreateManyAndReturnArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaign = await prisma.campaign.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Campaigns and only return the `id`
     * const campaignWithIdOnly = await prisma.campaign.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CampaignCreateManyAndReturnArgs>(args?: SelectSubset<T, CampaignCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Campaign.
     * @param {CampaignDeleteArgs} args - Arguments to delete one Campaign.
     * @example
     * // Delete one Campaign
     * const Campaign = await prisma.campaign.delete({
     *   where: {
     *     // ... filter to delete one Campaign
     *   }
     * })
     * 
     */
    delete<T extends CampaignDeleteArgs>(args: SelectSubset<T, CampaignDeleteArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Campaign.
     * @param {CampaignUpdateArgs} args - Arguments to update one Campaign.
     * @example
     * // Update one Campaign
     * const campaign = await prisma.campaign.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CampaignUpdateArgs>(args: SelectSubset<T, CampaignUpdateArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Campaigns.
     * @param {CampaignDeleteManyArgs} args - Arguments to filter Campaigns to delete.
     * @example
     * // Delete a few Campaigns
     * const { count } = await prisma.campaign.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CampaignDeleteManyArgs>(args?: SelectSubset<T, CampaignDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Campaigns
     * const campaign = await prisma.campaign.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CampaignUpdateManyArgs>(args: SelectSubset<T, CampaignUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaigns and returns the data updated in the database.
     * @param {CampaignUpdateManyAndReturnArgs} args - Arguments to update many Campaigns.
     * @example
     * // Update many Campaigns
     * const campaign = await prisma.campaign.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Campaigns and only return the `id`
     * const campaignWithIdOnly = await prisma.campaign.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CampaignUpdateManyAndReturnArgs>(args: SelectSubset<T, CampaignUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Campaign.
     * @param {CampaignUpsertArgs} args - Arguments to update or create a Campaign.
     * @example
     * // Update or create a Campaign
     * const campaign = await prisma.campaign.upsert({
     *   create: {
     *     // ... data to create a Campaign
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Campaign we want to update
     *   }
     * })
     */
    upsert<T extends CampaignUpsertArgs>(args: SelectSubset<T, CampaignUpsertArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignCountArgs} args - Arguments to filter Campaigns to count.
     * @example
     * // Count the number of Campaigns
     * const count = await prisma.campaign.count({
     *   where: {
     *     // ... the filter for the Campaigns we want to count
     *   }
     * })
    **/
    count<T extends CampaignCountArgs>(
      args?: Subset<T, CampaignCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampaignCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CampaignAggregateArgs>(args: Subset<T, CampaignAggregateArgs>): Prisma.PrismaPromise<GetCampaignAggregateType<T>>

    /**
     * Group by Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CampaignGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CampaignGroupByArgs['orderBy'] }
        : { orderBy?: CampaignGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CampaignGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampaignGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Campaign model
   */
  readonly fields: CampaignFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Campaign.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CampaignClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    headlines<T extends Campaign$headlinesArgs<ExtArgs> = {}>(args?: Subset<T, Campaign$headlinesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeadlinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    images<T extends Campaign$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Campaign$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    creatives<T extends Campaign$creativesArgs<ExtArgs> = {}>(args?: Subset<T, Campaign$creativesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreativePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Campaign model
   */
  interface CampaignFieldRefs {
    readonly id: FieldRef<"Campaign", 'Int'>
    readonly name: FieldRef<"Campaign", 'String'>
    readonly industry: FieldRef<"Campaign", 'String'>
    readonly targetAudience: FieldRef<"Campaign", 'String'>
    readonly tone: FieldRef<"Campaign", 'Tone'>
    readonly description: FieldRef<"Campaign", 'String'>
    readonly createdAt: FieldRef<"Campaign", 'DateTime'>
    readonly updatedAt: FieldRef<"Campaign", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Campaign findUnique
   */
  export type CampaignFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign findUniqueOrThrow
   */
  export type CampaignFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign findFirst
   */
  export type CampaignFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign findFirstOrThrow
   */
  export type CampaignFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign findMany
   */
  export type CampaignFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaigns to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign create
   */
  export type CampaignCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The data needed to create a Campaign.
     */
    data: XOR<CampaignCreateInput, CampaignUncheckedCreateInput>
  }

  /**
   * Campaign createMany
   */
  export type CampaignCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Campaigns.
     */
    data: CampaignCreateManyInput | CampaignCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Campaign createManyAndReturn
   */
  export type CampaignCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * The data used to create many Campaigns.
     */
    data: CampaignCreateManyInput | CampaignCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Campaign update
   */
  export type CampaignUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The data needed to update a Campaign.
     */
    data: XOR<CampaignUpdateInput, CampaignUncheckedUpdateInput>
    /**
     * Choose, which Campaign to update.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign updateMany
   */
  export type CampaignUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Campaigns.
     */
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyInput>
    /**
     * Filter which Campaigns to update
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to update.
     */
    limit?: number
  }

  /**
   * Campaign updateManyAndReturn
   */
  export type CampaignUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * The data used to update Campaigns.
     */
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyInput>
    /**
     * Filter which Campaigns to update
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to update.
     */
    limit?: number
  }

  /**
   * Campaign upsert
   */
  export type CampaignUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The filter to search for the Campaign to update in case it exists.
     */
    where: CampaignWhereUniqueInput
    /**
     * In case the Campaign found by the `where` argument doesn't exist, create a new Campaign with this data.
     */
    create: XOR<CampaignCreateInput, CampaignUncheckedCreateInput>
    /**
     * In case the Campaign was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CampaignUpdateInput, CampaignUncheckedUpdateInput>
  }

  /**
   * Campaign delete
   */
  export type CampaignDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter which Campaign to delete.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign deleteMany
   */
  export type CampaignDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaigns to delete
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to delete.
     */
    limit?: number
  }

  /**
   * Campaign.headlines
   */
  export type Campaign$headlinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Headline
     */
    select?: HeadlineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Headline
     */
    omit?: HeadlineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadlineInclude<ExtArgs> | null
    where?: HeadlineWhereInput
    orderBy?: HeadlineOrderByWithRelationInput | HeadlineOrderByWithRelationInput[]
    cursor?: HeadlineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HeadlineScalarFieldEnum | HeadlineScalarFieldEnum[]
  }

  /**
   * Campaign.images
   */
  export type Campaign$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    cursor?: ImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Campaign.creatives
   */
  export type Campaign$creativesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creative
     */
    select?: CreativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Creative
     */
    omit?: CreativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreativeInclude<ExtArgs> | null
    where?: CreativeWhereInput
    orderBy?: CreativeOrderByWithRelationInput | CreativeOrderByWithRelationInput[]
    cursor?: CreativeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CreativeScalarFieldEnum | CreativeScalarFieldEnum[]
  }

  /**
   * Campaign without action
   */
  export type CampaignDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
  }


  /**
   * Model Headline
   */

  export type AggregateHeadline = {
    _count: HeadlineCountAggregateOutputType | null
    _avg: HeadlineAvgAggregateOutputType | null
    _sum: HeadlineSumAggregateOutputType | null
    _min: HeadlineMinAggregateOutputType | null
    _max: HeadlineMaxAggregateOutputType | null
  }

  export type HeadlineAvgAggregateOutputType = {
    id: number | null
    campaignId: number | null
  }

  export type HeadlineSumAggregateOutputType = {
    id: number | null
    campaignId: number | null
  }

  export type HeadlineMinAggregateOutputType = {
    id: number | null
    campaignId: number | null
    text: string | null
    status: $Enums.GenerationStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HeadlineMaxAggregateOutputType = {
    id: number | null
    campaignId: number | null
    text: string | null
    status: $Enums.GenerationStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HeadlineCountAggregateOutputType = {
    id: number
    campaignId: number
    text: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HeadlineAvgAggregateInputType = {
    id?: true
    campaignId?: true
  }

  export type HeadlineSumAggregateInputType = {
    id?: true
    campaignId?: true
  }

  export type HeadlineMinAggregateInputType = {
    id?: true
    campaignId?: true
    text?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HeadlineMaxAggregateInputType = {
    id?: true
    campaignId?: true
    text?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HeadlineCountAggregateInputType = {
    id?: true
    campaignId?: true
    text?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HeadlineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Headline to aggregate.
     */
    where?: HeadlineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Headlines to fetch.
     */
    orderBy?: HeadlineOrderByWithRelationInput | HeadlineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HeadlineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Headlines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Headlines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Headlines
    **/
    _count?: true | HeadlineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HeadlineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HeadlineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HeadlineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HeadlineMaxAggregateInputType
  }

  export type GetHeadlineAggregateType<T extends HeadlineAggregateArgs> = {
        [P in keyof T & keyof AggregateHeadline]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHeadline[P]>
      : GetScalarType<T[P], AggregateHeadline[P]>
  }




  export type HeadlineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HeadlineWhereInput
    orderBy?: HeadlineOrderByWithAggregationInput | HeadlineOrderByWithAggregationInput[]
    by: HeadlineScalarFieldEnum[] | HeadlineScalarFieldEnum
    having?: HeadlineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HeadlineCountAggregateInputType | true
    _avg?: HeadlineAvgAggregateInputType
    _sum?: HeadlineSumAggregateInputType
    _min?: HeadlineMinAggregateInputType
    _max?: HeadlineMaxAggregateInputType
  }

  export type HeadlineGroupByOutputType = {
    id: number
    campaignId: number
    text: string | null
    status: $Enums.GenerationStatus
    createdAt: Date
    updatedAt: Date
    _count: HeadlineCountAggregateOutputType | null
    _avg: HeadlineAvgAggregateOutputType | null
    _sum: HeadlineSumAggregateOutputType | null
    _min: HeadlineMinAggregateOutputType | null
    _max: HeadlineMaxAggregateOutputType | null
  }

  type GetHeadlineGroupByPayload<T extends HeadlineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HeadlineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HeadlineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HeadlineGroupByOutputType[P]>
            : GetScalarType<T[P], HeadlineGroupByOutputType[P]>
        }
      >
    >


  export type HeadlineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    text?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    creatives?: boolean | Headline$creativesArgs<ExtArgs>
    _count?: boolean | HeadlineCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["headline"]>

  export type HeadlineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    text?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["headline"]>

  export type HeadlineSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    text?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["headline"]>

  export type HeadlineSelectScalar = {
    id?: boolean
    campaignId?: boolean
    text?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HeadlineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "campaignId" | "text" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["headline"]>
  export type HeadlineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    creatives?: boolean | Headline$creativesArgs<ExtArgs>
    _count?: boolean | HeadlineCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HeadlineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }
  export type HeadlineIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }

  export type $HeadlinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Headline"
    objects: {
      campaign: Prisma.$CampaignPayload<ExtArgs>
      creatives: Prisma.$CreativePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      campaignId: number
      text: string | null
      status: $Enums.GenerationStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["headline"]>
    composites: {}
  }

  type HeadlineGetPayload<S extends boolean | null | undefined | HeadlineDefaultArgs> = $Result.GetResult<Prisma.$HeadlinePayload, S>

  type HeadlineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HeadlineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HeadlineCountAggregateInputType | true
    }

  export interface HeadlineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Headline'], meta: { name: 'Headline' } }
    /**
     * Find zero or one Headline that matches the filter.
     * @param {HeadlineFindUniqueArgs} args - Arguments to find a Headline
     * @example
     * // Get one Headline
     * const headline = await prisma.headline.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HeadlineFindUniqueArgs>(args: SelectSubset<T, HeadlineFindUniqueArgs<ExtArgs>>): Prisma__HeadlineClient<$Result.GetResult<Prisma.$HeadlinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Headline that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HeadlineFindUniqueOrThrowArgs} args - Arguments to find a Headline
     * @example
     * // Get one Headline
     * const headline = await prisma.headline.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HeadlineFindUniqueOrThrowArgs>(args: SelectSubset<T, HeadlineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HeadlineClient<$Result.GetResult<Prisma.$HeadlinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Headline that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeadlineFindFirstArgs} args - Arguments to find a Headline
     * @example
     * // Get one Headline
     * const headline = await prisma.headline.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HeadlineFindFirstArgs>(args?: SelectSubset<T, HeadlineFindFirstArgs<ExtArgs>>): Prisma__HeadlineClient<$Result.GetResult<Prisma.$HeadlinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Headline that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeadlineFindFirstOrThrowArgs} args - Arguments to find a Headline
     * @example
     * // Get one Headline
     * const headline = await prisma.headline.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HeadlineFindFirstOrThrowArgs>(args?: SelectSubset<T, HeadlineFindFirstOrThrowArgs<ExtArgs>>): Prisma__HeadlineClient<$Result.GetResult<Prisma.$HeadlinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Headlines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeadlineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Headlines
     * const headlines = await prisma.headline.findMany()
     * 
     * // Get first 10 Headlines
     * const headlines = await prisma.headline.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const headlineWithIdOnly = await prisma.headline.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HeadlineFindManyArgs>(args?: SelectSubset<T, HeadlineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeadlinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Headline.
     * @param {HeadlineCreateArgs} args - Arguments to create a Headline.
     * @example
     * // Create one Headline
     * const Headline = await prisma.headline.create({
     *   data: {
     *     // ... data to create a Headline
     *   }
     * })
     * 
     */
    create<T extends HeadlineCreateArgs>(args: SelectSubset<T, HeadlineCreateArgs<ExtArgs>>): Prisma__HeadlineClient<$Result.GetResult<Prisma.$HeadlinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Headlines.
     * @param {HeadlineCreateManyArgs} args - Arguments to create many Headlines.
     * @example
     * // Create many Headlines
     * const headline = await prisma.headline.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HeadlineCreateManyArgs>(args?: SelectSubset<T, HeadlineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Headlines and returns the data saved in the database.
     * @param {HeadlineCreateManyAndReturnArgs} args - Arguments to create many Headlines.
     * @example
     * // Create many Headlines
     * const headline = await prisma.headline.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Headlines and only return the `id`
     * const headlineWithIdOnly = await prisma.headline.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HeadlineCreateManyAndReturnArgs>(args?: SelectSubset<T, HeadlineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeadlinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Headline.
     * @param {HeadlineDeleteArgs} args - Arguments to delete one Headline.
     * @example
     * // Delete one Headline
     * const Headline = await prisma.headline.delete({
     *   where: {
     *     // ... filter to delete one Headline
     *   }
     * })
     * 
     */
    delete<T extends HeadlineDeleteArgs>(args: SelectSubset<T, HeadlineDeleteArgs<ExtArgs>>): Prisma__HeadlineClient<$Result.GetResult<Prisma.$HeadlinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Headline.
     * @param {HeadlineUpdateArgs} args - Arguments to update one Headline.
     * @example
     * // Update one Headline
     * const headline = await prisma.headline.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HeadlineUpdateArgs>(args: SelectSubset<T, HeadlineUpdateArgs<ExtArgs>>): Prisma__HeadlineClient<$Result.GetResult<Prisma.$HeadlinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Headlines.
     * @param {HeadlineDeleteManyArgs} args - Arguments to filter Headlines to delete.
     * @example
     * // Delete a few Headlines
     * const { count } = await prisma.headline.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HeadlineDeleteManyArgs>(args?: SelectSubset<T, HeadlineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Headlines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeadlineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Headlines
     * const headline = await prisma.headline.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HeadlineUpdateManyArgs>(args: SelectSubset<T, HeadlineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Headlines and returns the data updated in the database.
     * @param {HeadlineUpdateManyAndReturnArgs} args - Arguments to update many Headlines.
     * @example
     * // Update many Headlines
     * const headline = await prisma.headline.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Headlines and only return the `id`
     * const headlineWithIdOnly = await prisma.headline.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HeadlineUpdateManyAndReturnArgs>(args: SelectSubset<T, HeadlineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeadlinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Headline.
     * @param {HeadlineUpsertArgs} args - Arguments to update or create a Headline.
     * @example
     * // Update or create a Headline
     * const headline = await prisma.headline.upsert({
     *   create: {
     *     // ... data to create a Headline
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Headline we want to update
     *   }
     * })
     */
    upsert<T extends HeadlineUpsertArgs>(args: SelectSubset<T, HeadlineUpsertArgs<ExtArgs>>): Prisma__HeadlineClient<$Result.GetResult<Prisma.$HeadlinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Headlines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeadlineCountArgs} args - Arguments to filter Headlines to count.
     * @example
     * // Count the number of Headlines
     * const count = await prisma.headline.count({
     *   where: {
     *     // ... the filter for the Headlines we want to count
     *   }
     * })
    **/
    count<T extends HeadlineCountArgs>(
      args?: Subset<T, HeadlineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HeadlineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Headline.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeadlineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HeadlineAggregateArgs>(args: Subset<T, HeadlineAggregateArgs>): Prisma.PrismaPromise<GetHeadlineAggregateType<T>>

    /**
     * Group by Headline.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeadlineGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HeadlineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HeadlineGroupByArgs['orderBy'] }
        : { orderBy?: HeadlineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HeadlineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHeadlineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Headline model
   */
  readonly fields: HeadlineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Headline.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HeadlineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campaign<T extends CampaignDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CampaignDefaultArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    creatives<T extends Headline$creativesArgs<ExtArgs> = {}>(args?: Subset<T, Headline$creativesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreativePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Headline model
   */
  interface HeadlineFieldRefs {
    readonly id: FieldRef<"Headline", 'Int'>
    readonly campaignId: FieldRef<"Headline", 'Int'>
    readonly text: FieldRef<"Headline", 'String'>
    readonly status: FieldRef<"Headline", 'GenerationStatus'>
    readonly createdAt: FieldRef<"Headline", 'DateTime'>
    readonly updatedAt: FieldRef<"Headline", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Headline findUnique
   */
  export type HeadlineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Headline
     */
    select?: HeadlineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Headline
     */
    omit?: HeadlineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadlineInclude<ExtArgs> | null
    /**
     * Filter, which Headline to fetch.
     */
    where: HeadlineWhereUniqueInput
  }

  /**
   * Headline findUniqueOrThrow
   */
  export type HeadlineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Headline
     */
    select?: HeadlineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Headline
     */
    omit?: HeadlineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadlineInclude<ExtArgs> | null
    /**
     * Filter, which Headline to fetch.
     */
    where: HeadlineWhereUniqueInput
  }

  /**
   * Headline findFirst
   */
  export type HeadlineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Headline
     */
    select?: HeadlineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Headline
     */
    omit?: HeadlineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadlineInclude<ExtArgs> | null
    /**
     * Filter, which Headline to fetch.
     */
    where?: HeadlineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Headlines to fetch.
     */
    orderBy?: HeadlineOrderByWithRelationInput | HeadlineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Headlines.
     */
    cursor?: HeadlineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Headlines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Headlines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Headlines.
     */
    distinct?: HeadlineScalarFieldEnum | HeadlineScalarFieldEnum[]
  }

  /**
   * Headline findFirstOrThrow
   */
  export type HeadlineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Headline
     */
    select?: HeadlineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Headline
     */
    omit?: HeadlineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadlineInclude<ExtArgs> | null
    /**
     * Filter, which Headline to fetch.
     */
    where?: HeadlineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Headlines to fetch.
     */
    orderBy?: HeadlineOrderByWithRelationInput | HeadlineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Headlines.
     */
    cursor?: HeadlineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Headlines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Headlines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Headlines.
     */
    distinct?: HeadlineScalarFieldEnum | HeadlineScalarFieldEnum[]
  }

  /**
   * Headline findMany
   */
  export type HeadlineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Headline
     */
    select?: HeadlineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Headline
     */
    omit?: HeadlineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadlineInclude<ExtArgs> | null
    /**
     * Filter, which Headlines to fetch.
     */
    where?: HeadlineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Headlines to fetch.
     */
    orderBy?: HeadlineOrderByWithRelationInput | HeadlineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Headlines.
     */
    cursor?: HeadlineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Headlines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Headlines.
     */
    skip?: number
    distinct?: HeadlineScalarFieldEnum | HeadlineScalarFieldEnum[]
  }

  /**
   * Headline create
   */
  export type HeadlineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Headline
     */
    select?: HeadlineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Headline
     */
    omit?: HeadlineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadlineInclude<ExtArgs> | null
    /**
     * The data needed to create a Headline.
     */
    data: XOR<HeadlineCreateInput, HeadlineUncheckedCreateInput>
  }

  /**
   * Headline createMany
   */
  export type HeadlineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Headlines.
     */
    data: HeadlineCreateManyInput | HeadlineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Headline createManyAndReturn
   */
  export type HeadlineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Headline
     */
    select?: HeadlineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Headline
     */
    omit?: HeadlineOmit<ExtArgs> | null
    /**
     * The data used to create many Headlines.
     */
    data: HeadlineCreateManyInput | HeadlineCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadlineIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Headline update
   */
  export type HeadlineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Headline
     */
    select?: HeadlineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Headline
     */
    omit?: HeadlineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadlineInclude<ExtArgs> | null
    /**
     * The data needed to update a Headline.
     */
    data: XOR<HeadlineUpdateInput, HeadlineUncheckedUpdateInput>
    /**
     * Choose, which Headline to update.
     */
    where: HeadlineWhereUniqueInput
  }

  /**
   * Headline updateMany
   */
  export type HeadlineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Headlines.
     */
    data: XOR<HeadlineUpdateManyMutationInput, HeadlineUncheckedUpdateManyInput>
    /**
     * Filter which Headlines to update
     */
    where?: HeadlineWhereInput
    /**
     * Limit how many Headlines to update.
     */
    limit?: number
  }

  /**
   * Headline updateManyAndReturn
   */
  export type HeadlineUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Headline
     */
    select?: HeadlineSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Headline
     */
    omit?: HeadlineOmit<ExtArgs> | null
    /**
     * The data used to update Headlines.
     */
    data: XOR<HeadlineUpdateManyMutationInput, HeadlineUncheckedUpdateManyInput>
    /**
     * Filter which Headlines to update
     */
    where?: HeadlineWhereInput
    /**
     * Limit how many Headlines to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadlineIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Headline upsert
   */
  export type HeadlineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Headline
     */
    select?: HeadlineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Headline
     */
    omit?: HeadlineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadlineInclude<ExtArgs> | null
    /**
     * The filter to search for the Headline to update in case it exists.
     */
    where: HeadlineWhereUniqueInput
    /**
     * In case the Headline found by the `where` argument doesn't exist, create a new Headline with this data.
     */
    create: XOR<HeadlineCreateInput, HeadlineUncheckedCreateInput>
    /**
     * In case the Headline was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HeadlineUpdateInput, HeadlineUncheckedUpdateInput>
  }

  /**
   * Headline delete
   */
  export type HeadlineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Headline
     */
    select?: HeadlineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Headline
     */
    omit?: HeadlineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadlineInclude<ExtArgs> | null
    /**
     * Filter which Headline to delete.
     */
    where: HeadlineWhereUniqueInput
  }

  /**
   * Headline deleteMany
   */
  export type HeadlineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Headlines to delete
     */
    where?: HeadlineWhereInput
    /**
     * Limit how many Headlines to delete.
     */
    limit?: number
  }

  /**
   * Headline.creatives
   */
  export type Headline$creativesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creative
     */
    select?: CreativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Creative
     */
    omit?: CreativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreativeInclude<ExtArgs> | null
    where?: CreativeWhereInput
    orderBy?: CreativeOrderByWithRelationInput | CreativeOrderByWithRelationInput[]
    cursor?: CreativeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CreativeScalarFieldEnum | CreativeScalarFieldEnum[]
  }

  /**
   * Headline without action
   */
  export type HeadlineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Headline
     */
    select?: HeadlineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Headline
     */
    omit?: HeadlineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadlineInclude<ExtArgs> | null
  }


  /**
   * Model Image
   */

  export type AggregateImage = {
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  export type ImageAvgAggregateOutputType = {
    id: number | null
    campaignId: number | null
  }

  export type ImageSumAggregateOutputType = {
    id: number | null
    campaignId: number | null
  }

  export type ImageMinAggregateOutputType = {
    id: number | null
    campaignId: number | null
    url: string | null
    prompt: string | null
    status: $Enums.GenerationStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ImageMaxAggregateOutputType = {
    id: number | null
    campaignId: number | null
    url: string | null
    prompt: string | null
    status: $Enums.GenerationStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ImageCountAggregateOutputType = {
    id: number
    campaignId: number
    url: number
    prompt: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ImageAvgAggregateInputType = {
    id?: true
    campaignId?: true
  }

  export type ImageSumAggregateInputType = {
    id?: true
    campaignId?: true
  }

  export type ImageMinAggregateInputType = {
    id?: true
    campaignId?: true
    url?: true
    prompt?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ImageMaxAggregateInputType = {
    id?: true
    campaignId?: true
    url?: true
    prompt?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ImageCountAggregateInputType = {
    id?: true
    campaignId?: true
    url?: true
    prompt?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Image to aggregate.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageMaxAggregateInputType
  }

  export type GetImageAggregateType<T extends ImageAggregateArgs> = {
        [P in keyof T & keyof AggregateImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage[P]>
      : GetScalarType<T[P], AggregateImage[P]>
  }




  export type ImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithAggregationInput | ImageOrderByWithAggregationInput[]
    by: ImageScalarFieldEnum[] | ImageScalarFieldEnum
    having?: ImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageCountAggregateInputType | true
    _avg?: ImageAvgAggregateInputType
    _sum?: ImageSumAggregateInputType
    _min?: ImageMinAggregateInputType
    _max?: ImageMaxAggregateInputType
  }

  export type ImageGroupByOutputType = {
    id: number
    campaignId: number
    url: string | null
    prompt: string | null
    status: $Enums.GenerationStatus
    createdAt: Date
    updatedAt: Date
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  type GetImageGroupByPayload<T extends ImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageGroupByOutputType[P]>
            : GetScalarType<T[P], ImageGroupByOutputType[P]>
        }
      >
    >


  export type ImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    url?: boolean
    prompt?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    creatives?: boolean | Image$creativesArgs<ExtArgs>
    _count?: boolean | ImageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    url?: boolean
    prompt?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    url?: boolean
    prompt?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectScalar = {
    id?: boolean
    campaignId?: boolean
    url?: boolean
    prompt?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "campaignId" | "url" | "prompt" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["image"]>
  export type ImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    creatives?: boolean | Image$creativesArgs<ExtArgs>
    _count?: boolean | ImageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }
  export type ImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }

  export type $ImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Image"
    objects: {
      campaign: Prisma.$CampaignPayload<ExtArgs>
      creatives: Prisma.$CreativePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      campaignId: number
      url: string | null
      prompt: string | null
      status: $Enums.GenerationStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["image"]>
    composites: {}
  }

  type ImageGetPayload<S extends boolean | null | undefined | ImageDefaultArgs> = $Result.GetResult<Prisma.$ImagePayload, S>

  type ImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImageCountAggregateInputType | true
    }

  export interface ImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Image'], meta: { name: 'Image' } }
    /**
     * Find zero or one Image that matches the filter.
     * @param {ImageFindUniqueArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImageFindUniqueArgs>(args: SelectSubset<T, ImageFindUniqueArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Image that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImageFindUniqueOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImageFindFirstArgs>(args?: SelectSubset<T, ImageFindFirstArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.image.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.image.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageWithIdOnly = await prisma.image.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImageFindManyArgs>(args?: SelectSubset<T, ImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Image.
     * @param {ImageCreateArgs} args - Arguments to create a Image.
     * @example
     * // Create one Image
     * const Image = await prisma.image.create({
     *   data: {
     *     // ... data to create a Image
     *   }
     * })
     * 
     */
    create<T extends ImageCreateArgs>(args: SelectSubset<T, ImageCreateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Images.
     * @param {ImageCreateManyArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImageCreateManyArgs>(args?: SelectSubset<T, ImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Images and returns the data saved in the database.
     * @param {ImageCreateManyAndReturnArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImageCreateManyAndReturnArgs>(args?: SelectSubset<T, ImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Image.
     * @param {ImageDeleteArgs} args - Arguments to delete one Image.
     * @example
     * // Delete one Image
     * const Image = await prisma.image.delete({
     *   where: {
     *     // ... filter to delete one Image
     *   }
     * })
     * 
     */
    delete<T extends ImageDeleteArgs>(args: SelectSubset<T, ImageDeleteArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Image.
     * @param {ImageUpdateArgs} args - Arguments to update one Image.
     * @example
     * // Update one Image
     * const image = await prisma.image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImageUpdateArgs>(args: SelectSubset<T, ImageUpdateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Images.
     * @param {ImageDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImageDeleteManyArgs>(args?: SelectSubset<T, ImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImageUpdateManyArgs>(args: SelectSubset<T, ImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images and returns the data updated in the database.
     * @param {ImageUpdateManyAndReturnArgs} args - Arguments to update many Images.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ImageUpdateManyAndReturnArgs>(args: SelectSubset<T, ImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Image.
     * @param {ImageUpsertArgs} args - Arguments to update or create a Image.
     * @example
     * // Update or create a Image
     * const image = await prisma.image.upsert({
     *   create: {
     *     // ... data to create a Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Image we want to update
     *   }
     * })
     */
    upsert<T extends ImageUpsertArgs>(args: SelectSubset<T, ImageUpsertArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.image.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImageCountArgs>(
      args?: Subset<T, ImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImageAggregateArgs>(args: Subset<T, ImageAggregateArgs>): Prisma.PrismaPromise<GetImageAggregateType<T>>

    /**
     * Group by Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageGroupByArgs['orderBy'] }
        : { orderBy?: ImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Image model
   */
  readonly fields: ImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campaign<T extends CampaignDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CampaignDefaultArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    creatives<T extends Image$creativesArgs<ExtArgs> = {}>(args?: Subset<T, Image$creativesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreativePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Image model
   */
  interface ImageFieldRefs {
    readonly id: FieldRef<"Image", 'Int'>
    readonly campaignId: FieldRef<"Image", 'Int'>
    readonly url: FieldRef<"Image", 'String'>
    readonly prompt: FieldRef<"Image", 'String'>
    readonly status: FieldRef<"Image", 'GenerationStatus'>
    readonly createdAt: FieldRef<"Image", 'DateTime'>
    readonly updatedAt: FieldRef<"Image", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Image findUnique
   */
  export type ImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findUniqueOrThrow
   */
  export type ImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findFirst
   */
  export type ImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findFirstOrThrow
   */
  export type ImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findMany
   */
  export type ImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image create
   */
  export type ImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to create a Image.
     */
    data: XOR<ImageCreateInput, ImageUncheckedCreateInput>
  }

  /**
   * Image createMany
   */
  export type ImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Image createManyAndReturn
   */
  export type ImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Image update
   */
  export type ImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to update a Image.
     */
    data: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
    /**
     * Choose, which Image to update.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image updateMany
   */
  export type ImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
  }

  /**
   * Image updateManyAndReturn
   */
  export type ImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Image upsert
   */
  export type ImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The filter to search for the Image to update in case it exists.
     */
    where: ImageWhereUniqueInput
    /**
     * In case the Image found by the `where` argument doesn't exist, create a new Image with this data.
     */
    create: XOR<ImageCreateInput, ImageUncheckedCreateInput>
    /**
     * In case the Image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
  }

  /**
   * Image delete
   */
  export type ImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter which Image to delete.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image deleteMany
   */
  export type ImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to delete
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to delete.
     */
    limit?: number
  }

  /**
   * Image.creatives
   */
  export type Image$creativesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creative
     */
    select?: CreativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Creative
     */
    omit?: CreativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreativeInclude<ExtArgs> | null
    where?: CreativeWhereInput
    orderBy?: CreativeOrderByWithRelationInput | CreativeOrderByWithRelationInput[]
    cursor?: CreativeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CreativeScalarFieldEnum | CreativeScalarFieldEnum[]
  }

  /**
   * Image without action
   */
  export type ImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
  }


  /**
   * Model Creative
   */

  export type AggregateCreative = {
    _count: CreativeCountAggregateOutputType | null
    _avg: CreativeAvgAggregateOutputType | null
    _sum: CreativeSumAggregateOutputType | null
    _min: CreativeMinAggregateOutputType | null
    _max: CreativeMaxAggregateOutputType | null
  }

  export type CreativeAvgAggregateOutputType = {
    id: number | null
    campaignId: number | null
    headlineId: number | null
    imageId: number | null
  }

  export type CreativeSumAggregateOutputType = {
    id: number | null
    campaignId: number | null
    headlineId: number | null
    imageId: number | null
  }

  export type CreativeMinAggregateOutputType = {
    id: number | null
    campaignId: number | null
    headlineId: number | null
    imageId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CreativeMaxAggregateOutputType = {
    id: number | null
    campaignId: number | null
    headlineId: number | null
    imageId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CreativeCountAggregateOutputType = {
    id: number
    campaignId: number
    headlineId: number
    imageId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CreativeAvgAggregateInputType = {
    id?: true
    campaignId?: true
    headlineId?: true
    imageId?: true
  }

  export type CreativeSumAggregateInputType = {
    id?: true
    campaignId?: true
    headlineId?: true
    imageId?: true
  }

  export type CreativeMinAggregateInputType = {
    id?: true
    campaignId?: true
    headlineId?: true
    imageId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CreativeMaxAggregateInputType = {
    id?: true
    campaignId?: true
    headlineId?: true
    imageId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CreativeCountAggregateInputType = {
    id?: true
    campaignId?: true
    headlineId?: true
    imageId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CreativeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Creative to aggregate.
     */
    where?: CreativeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Creatives to fetch.
     */
    orderBy?: CreativeOrderByWithRelationInput | CreativeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CreativeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Creatives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Creatives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Creatives
    **/
    _count?: true | CreativeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CreativeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CreativeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CreativeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CreativeMaxAggregateInputType
  }

  export type GetCreativeAggregateType<T extends CreativeAggregateArgs> = {
        [P in keyof T & keyof AggregateCreative]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCreative[P]>
      : GetScalarType<T[P], AggregateCreative[P]>
  }




  export type CreativeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreativeWhereInput
    orderBy?: CreativeOrderByWithAggregationInput | CreativeOrderByWithAggregationInput[]
    by: CreativeScalarFieldEnum[] | CreativeScalarFieldEnum
    having?: CreativeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CreativeCountAggregateInputType | true
    _avg?: CreativeAvgAggregateInputType
    _sum?: CreativeSumAggregateInputType
    _min?: CreativeMinAggregateInputType
    _max?: CreativeMaxAggregateInputType
  }

  export type CreativeGroupByOutputType = {
    id: number
    campaignId: number | null
    headlineId: number | null
    imageId: number | null
    createdAt: Date
    updatedAt: Date
    _count: CreativeCountAggregateOutputType | null
    _avg: CreativeAvgAggregateOutputType | null
    _sum: CreativeSumAggregateOutputType | null
    _min: CreativeMinAggregateOutputType | null
    _max: CreativeMaxAggregateOutputType | null
  }

  type GetCreativeGroupByPayload<T extends CreativeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CreativeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CreativeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CreativeGroupByOutputType[P]>
            : GetScalarType<T[P], CreativeGroupByOutputType[P]>
        }
      >
    >


  export type CreativeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    headlineId?: boolean
    imageId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campaign?: boolean | Creative$campaignArgs<ExtArgs>
    headline?: boolean | Creative$headlineArgs<ExtArgs>
    image?: boolean | Creative$imageArgs<ExtArgs>
  }, ExtArgs["result"]["creative"]>

  export type CreativeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    headlineId?: boolean
    imageId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campaign?: boolean | Creative$campaignArgs<ExtArgs>
    headline?: boolean | Creative$headlineArgs<ExtArgs>
    image?: boolean | Creative$imageArgs<ExtArgs>
  }, ExtArgs["result"]["creative"]>

  export type CreativeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    headlineId?: boolean
    imageId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campaign?: boolean | Creative$campaignArgs<ExtArgs>
    headline?: boolean | Creative$headlineArgs<ExtArgs>
    image?: boolean | Creative$imageArgs<ExtArgs>
  }, ExtArgs["result"]["creative"]>

  export type CreativeSelectScalar = {
    id?: boolean
    campaignId?: boolean
    headlineId?: boolean
    imageId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CreativeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "campaignId" | "headlineId" | "imageId" | "createdAt" | "updatedAt", ExtArgs["result"]["creative"]>
  export type CreativeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | Creative$campaignArgs<ExtArgs>
    headline?: boolean | Creative$headlineArgs<ExtArgs>
    image?: boolean | Creative$imageArgs<ExtArgs>
  }
  export type CreativeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | Creative$campaignArgs<ExtArgs>
    headline?: boolean | Creative$headlineArgs<ExtArgs>
    image?: boolean | Creative$imageArgs<ExtArgs>
  }
  export type CreativeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | Creative$campaignArgs<ExtArgs>
    headline?: boolean | Creative$headlineArgs<ExtArgs>
    image?: boolean | Creative$imageArgs<ExtArgs>
  }

  export type $CreativePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Creative"
    objects: {
      campaign: Prisma.$CampaignPayload<ExtArgs> | null
      headline: Prisma.$HeadlinePayload<ExtArgs> | null
      image: Prisma.$ImagePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      campaignId: number | null
      headlineId: number | null
      imageId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["creative"]>
    composites: {}
  }

  type CreativeGetPayload<S extends boolean | null | undefined | CreativeDefaultArgs> = $Result.GetResult<Prisma.$CreativePayload, S>

  type CreativeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CreativeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CreativeCountAggregateInputType | true
    }

  export interface CreativeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Creative'], meta: { name: 'Creative' } }
    /**
     * Find zero or one Creative that matches the filter.
     * @param {CreativeFindUniqueArgs} args - Arguments to find a Creative
     * @example
     * // Get one Creative
     * const creative = await prisma.creative.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CreativeFindUniqueArgs>(args: SelectSubset<T, CreativeFindUniqueArgs<ExtArgs>>): Prisma__CreativeClient<$Result.GetResult<Prisma.$CreativePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Creative that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CreativeFindUniqueOrThrowArgs} args - Arguments to find a Creative
     * @example
     * // Get one Creative
     * const creative = await prisma.creative.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CreativeFindUniqueOrThrowArgs>(args: SelectSubset<T, CreativeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CreativeClient<$Result.GetResult<Prisma.$CreativePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Creative that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreativeFindFirstArgs} args - Arguments to find a Creative
     * @example
     * // Get one Creative
     * const creative = await prisma.creative.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CreativeFindFirstArgs>(args?: SelectSubset<T, CreativeFindFirstArgs<ExtArgs>>): Prisma__CreativeClient<$Result.GetResult<Prisma.$CreativePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Creative that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreativeFindFirstOrThrowArgs} args - Arguments to find a Creative
     * @example
     * // Get one Creative
     * const creative = await prisma.creative.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CreativeFindFirstOrThrowArgs>(args?: SelectSubset<T, CreativeFindFirstOrThrowArgs<ExtArgs>>): Prisma__CreativeClient<$Result.GetResult<Prisma.$CreativePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Creatives that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreativeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Creatives
     * const creatives = await prisma.creative.findMany()
     * 
     * // Get first 10 Creatives
     * const creatives = await prisma.creative.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const creativeWithIdOnly = await prisma.creative.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CreativeFindManyArgs>(args?: SelectSubset<T, CreativeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreativePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Creative.
     * @param {CreativeCreateArgs} args - Arguments to create a Creative.
     * @example
     * // Create one Creative
     * const Creative = await prisma.creative.create({
     *   data: {
     *     // ... data to create a Creative
     *   }
     * })
     * 
     */
    create<T extends CreativeCreateArgs>(args: SelectSubset<T, CreativeCreateArgs<ExtArgs>>): Prisma__CreativeClient<$Result.GetResult<Prisma.$CreativePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Creatives.
     * @param {CreativeCreateManyArgs} args - Arguments to create many Creatives.
     * @example
     * // Create many Creatives
     * const creative = await prisma.creative.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CreativeCreateManyArgs>(args?: SelectSubset<T, CreativeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Creatives and returns the data saved in the database.
     * @param {CreativeCreateManyAndReturnArgs} args - Arguments to create many Creatives.
     * @example
     * // Create many Creatives
     * const creative = await prisma.creative.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Creatives and only return the `id`
     * const creativeWithIdOnly = await prisma.creative.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CreativeCreateManyAndReturnArgs>(args?: SelectSubset<T, CreativeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreativePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Creative.
     * @param {CreativeDeleteArgs} args - Arguments to delete one Creative.
     * @example
     * // Delete one Creative
     * const Creative = await prisma.creative.delete({
     *   where: {
     *     // ... filter to delete one Creative
     *   }
     * })
     * 
     */
    delete<T extends CreativeDeleteArgs>(args: SelectSubset<T, CreativeDeleteArgs<ExtArgs>>): Prisma__CreativeClient<$Result.GetResult<Prisma.$CreativePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Creative.
     * @param {CreativeUpdateArgs} args - Arguments to update one Creative.
     * @example
     * // Update one Creative
     * const creative = await prisma.creative.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CreativeUpdateArgs>(args: SelectSubset<T, CreativeUpdateArgs<ExtArgs>>): Prisma__CreativeClient<$Result.GetResult<Prisma.$CreativePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Creatives.
     * @param {CreativeDeleteManyArgs} args - Arguments to filter Creatives to delete.
     * @example
     * // Delete a few Creatives
     * const { count } = await prisma.creative.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CreativeDeleteManyArgs>(args?: SelectSubset<T, CreativeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Creatives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreativeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Creatives
     * const creative = await prisma.creative.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CreativeUpdateManyArgs>(args: SelectSubset<T, CreativeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Creatives and returns the data updated in the database.
     * @param {CreativeUpdateManyAndReturnArgs} args - Arguments to update many Creatives.
     * @example
     * // Update many Creatives
     * const creative = await prisma.creative.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Creatives and only return the `id`
     * const creativeWithIdOnly = await prisma.creative.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CreativeUpdateManyAndReturnArgs>(args: SelectSubset<T, CreativeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreativePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Creative.
     * @param {CreativeUpsertArgs} args - Arguments to update or create a Creative.
     * @example
     * // Update or create a Creative
     * const creative = await prisma.creative.upsert({
     *   create: {
     *     // ... data to create a Creative
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Creative we want to update
     *   }
     * })
     */
    upsert<T extends CreativeUpsertArgs>(args: SelectSubset<T, CreativeUpsertArgs<ExtArgs>>): Prisma__CreativeClient<$Result.GetResult<Prisma.$CreativePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Creatives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreativeCountArgs} args - Arguments to filter Creatives to count.
     * @example
     * // Count the number of Creatives
     * const count = await prisma.creative.count({
     *   where: {
     *     // ... the filter for the Creatives we want to count
     *   }
     * })
    **/
    count<T extends CreativeCountArgs>(
      args?: Subset<T, CreativeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CreativeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Creative.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreativeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CreativeAggregateArgs>(args: Subset<T, CreativeAggregateArgs>): Prisma.PrismaPromise<GetCreativeAggregateType<T>>

    /**
     * Group by Creative.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreativeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CreativeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CreativeGroupByArgs['orderBy'] }
        : { orderBy?: CreativeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CreativeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCreativeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Creative model
   */
  readonly fields: CreativeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Creative.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CreativeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campaign<T extends Creative$campaignArgs<ExtArgs> = {}>(args?: Subset<T, Creative$campaignArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    headline<T extends Creative$headlineArgs<ExtArgs> = {}>(args?: Subset<T, Creative$headlineArgs<ExtArgs>>): Prisma__HeadlineClient<$Result.GetResult<Prisma.$HeadlinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    image<T extends Creative$imageArgs<ExtArgs> = {}>(args?: Subset<T, Creative$imageArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Creative model
   */
  interface CreativeFieldRefs {
    readonly id: FieldRef<"Creative", 'Int'>
    readonly campaignId: FieldRef<"Creative", 'Int'>
    readonly headlineId: FieldRef<"Creative", 'Int'>
    readonly imageId: FieldRef<"Creative", 'Int'>
    readonly createdAt: FieldRef<"Creative", 'DateTime'>
    readonly updatedAt: FieldRef<"Creative", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Creative findUnique
   */
  export type CreativeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creative
     */
    select?: CreativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Creative
     */
    omit?: CreativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreativeInclude<ExtArgs> | null
    /**
     * Filter, which Creative to fetch.
     */
    where: CreativeWhereUniqueInput
  }

  /**
   * Creative findUniqueOrThrow
   */
  export type CreativeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creative
     */
    select?: CreativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Creative
     */
    omit?: CreativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreativeInclude<ExtArgs> | null
    /**
     * Filter, which Creative to fetch.
     */
    where: CreativeWhereUniqueInput
  }

  /**
   * Creative findFirst
   */
  export type CreativeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creative
     */
    select?: CreativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Creative
     */
    omit?: CreativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreativeInclude<ExtArgs> | null
    /**
     * Filter, which Creative to fetch.
     */
    where?: CreativeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Creatives to fetch.
     */
    orderBy?: CreativeOrderByWithRelationInput | CreativeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Creatives.
     */
    cursor?: CreativeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Creatives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Creatives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Creatives.
     */
    distinct?: CreativeScalarFieldEnum | CreativeScalarFieldEnum[]
  }

  /**
   * Creative findFirstOrThrow
   */
  export type CreativeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creative
     */
    select?: CreativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Creative
     */
    omit?: CreativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreativeInclude<ExtArgs> | null
    /**
     * Filter, which Creative to fetch.
     */
    where?: CreativeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Creatives to fetch.
     */
    orderBy?: CreativeOrderByWithRelationInput | CreativeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Creatives.
     */
    cursor?: CreativeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Creatives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Creatives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Creatives.
     */
    distinct?: CreativeScalarFieldEnum | CreativeScalarFieldEnum[]
  }

  /**
   * Creative findMany
   */
  export type CreativeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creative
     */
    select?: CreativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Creative
     */
    omit?: CreativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreativeInclude<ExtArgs> | null
    /**
     * Filter, which Creatives to fetch.
     */
    where?: CreativeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Creatives to fetch.
     */
    orderBy?: CreativeOrderByWithRelationInput | CreativeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Creatives.
     */
    cursor?: CreativeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Creatives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Creatives.
     */
    skip?: number
    distinct?: CreativeScalarFieldEnum | CreativeScalarFieldEnum[]
  }

  /**
   * Creative create
   */
  export type CreativeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creative
     */
    select?: CreativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Creative
     */
    omit?: CreativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreativeInclude<ExtArgs> | null
    /**
     * The data needed to create a Creative.
     */
    data: XOR<CreativeCreateInput, CreativeUncheckedCreateInput>
  }

  /**
   * Creative createMany
   */
  export type CreativeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Creatives.
     */
    data: CreativeCreateManyInput | CreativeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Creative createManyAndReturn
   */
  export type CreativeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creative
     */
    select?: CreativeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Creative
     */
    omit?: CreativeOmit<ExtArgs> | null
    /**
     * The data used to create many Creatives.
     */
    data: CreativeCreateManyInput | CreativeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreativeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Creative update
   */
  export type CreativeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creative
     */
    select?: CreativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Creative
     */
    omit?: CreativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreativeInclude<ExtArgs> | null
    /**
     * The data needed to update a Creative.
     */
    data: XOR<CreativeUpdateInput, CreativeUncheckedUpdateInput>
    /**
     * Choose, which Creative to update.
     */
    where: CreativeWhereUniqueInput
  }

  /**
   * Creative updateMany
   */
  export type CreativeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Creatives.
     */
    data: XOR<CreativeUpdateManyMutationInput, CreativeUncheckedUpdateManyInput>
    /**
     * Filter which Creatives to update
     */
    where?: CreativeWhereInput
    /**
     * Limit how many Creatives to update.
     */
    limit?: number
  }

  /**
   * Creative updateManyAndReturn
   */
  export type CreativeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creative
     */
    select?: CreativeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Creative
     */
    omit?: CreativeOmit<ExtArgs> | null
    /**
     * The data used to update Creatives.
     */
    data: XOR<CreativeUpdateManyMutationInput, CreativeUncheckedUpdateManyInput>
    /**
     * Filter which Creatives to update
     */
    where?: CreativeWhereInput
    /**
     * Limit how many Creatives to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreativeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Creative upsert
   */
  export type CreativeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creative
     */
    select?: CreativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Creative
     */
    omit?: CreativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreativeInclude<ExtArgs> | null
    /**
     * The filter to search for the Creative to update in case it exists.
     */
    where: CreativeWhereUniqueInput
    /**
     * In case the Creative found by the `where` argument doesn't exist, create a new Creative with this data.
     */
    create: XOR<CreativeCreateInput, CreativeUncheckedCreateInput>
    /**
     * In case the Creative was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CreativeUpdateInput, CreativeUncheckedUpdateInput>
  }

  /**
   * Creative delete
   */
  export type CreativeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creative
     */
    select?: CreativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Creative
     */
    omit?: CreativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreativeInclude<ExtArgs> | null
    /**
     * Filter which Creative to delete.
     */
    where: CreativeWhereUniqueInput
  }

  /**
   * Creative deleteMany
   */
  export type CreativeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Creatives to delete
     */
    where?: CreativeWhereInput
    /**
     * Limit how many Creatives to delete.
     */
    limit?: number
  }

  /**
   * Creative.campaign
   */
  export type Creative$campaignArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    where?: CampaignWhereInput
  }

  /**
   * Creative.headline
   */
  export type Creative$headlineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Headline
     */
    select?: HeadlineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Headline
     */
    omit?: HeadlineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadlineInclude<ExtArgs> | null
    where?: HeadlineWhereInput
  }

  /**
   * Creative.image
   */
  export type Creative$imageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
  }

  /**
   * Creative without action
   */
  export type CreativeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creative
     */
    select?: CreativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Creative
     */
    omit?: CreativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreativeInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CampaignScalarFieldEnum: {
    id: 'id',
    name: 'name',
    industry: 'industry',
    targetAudience: 'targetAudience',
    tone: 'tone',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CampaignScalarFieldEnum = (typeof CampaignScalarFieldEnum)[keyof typeof CampaignScalarFieldEnum]


  export const HeadlineScalarFieldEnum: {
    id: 'id',
    campaignId: 'campaignId',
    text: 'text',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HeadlineScalarFieldEnum = (typeof HeadlineScalarFieldEnum)[keyof typeof HeadlineScalarFieldEnum]


  export const ImageScalarFieldEnum: {
    id: 'id',
    campaignId: 'campaignId',
    url: 'url',
    prompt: 'prompt',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum]


  export const CreativeScalarFieldEnum: {
    id: 'id',
    campaignId: 'campaignId',
    headlineId: 'headlineId',
    imageId: 'imageId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CreativeScalarFieldEnum = (typeof CreativeScalarFieldEnum)[keyof typeof CreativeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Tone'
   */
  export type EnumToneFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Tone'>
    


  /**
   * Reference to a field of type 'Tone[]'
   */
  export type ListEnumToneFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Tone[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'GenerationStatus'
   */
  export type EnumGenerationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GenerationStatus'>
    


  /**
   * Reference to a field of type 'GenerationStatus[]'
   */
  export type ListEnumGenerationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GenerationStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CampaignWhereInput = {
    AND?: CampaignWhereInput | CampaignWhereInput[]
    OR?: CampaignWhereInput[]
    NOT?: CampaignWhereInput | CampaignWhereInput[]
    id?: IntFilter<"Campaign"> | number
    name?: StringFilter<"Campaign"> | string
    industry?: StringFilter<"Campaign"> | string
    targetAudience?: StringFilter<"Campaign"> | string
    tone?: EnumToneFilter<"Campaign"> | $Enums.Tone
    description?: StringNullableFilter<"Campaign"> | string | null
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
    headlines?: HeadlineListRelationFilter
    images?: ImageListRelationFilter
    creatives?: CreativeListRelationFilter
  }

  export type CampaignOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    industry?: SortOrder
    targetAudience?: SortOrder
    tone?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    headlines?: HeadlineOrderByRelationAggregateInput
    images?: ImageOrderByRelationAggregateInput
    creatives?: CreativeOrderByRelationAggregateInput
  }

  export type CampaignWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CampaignWhereInput | CampaignWhereInput[]
    OR?: CampaignWhereInput[]
    NOT?: CampaignWhereInput | CampaignWhereInput[]
    name?: StringFilter<"Campaign"> | string
    industry?: StringFilter<"Campaign"> | string
    targetAudience?: StringFilter<"Campaign"> | string
    tone?: EnumToneFilter<"Campaign"> | $Enums.Tone
    description?: StringNullableFilter<"Campaign"> | string | null
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
    headlines?: HeadlineListRelationFilter
    images?: ImageListRelationFilter
    creatives?: CreativeListRelationFilter
  }, "id">

  export type CampaignOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    industry?: SortOrder
    targetAudience?: SortOrder
    tone?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CampaignCountOrderByAggregateInput
    _avg?: CampaignAvgOrderByAggregateInput
    _max?: CampaignMaxOrderByAggregateInput
    _min?: CampaignMinOrderByAggregateInput
    _sum?: CampaignSumOrderByAggregateInput
  }

  export type CampaignScalarWhereWithAggregatesInput = {
    AND?: CampaignScalarWhereWithAggregatesInput | CampaignScalarWhereWithAggregatesInput[]
    OR?: CampaignScalarWhereWithAggregatesInput[]
    NOT?: CampaignScalarWhereWithAggregatesInput | CampaignScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Campaign"> | number
    name?: StringWithAggregatesFilter<"Campaign"> | string
    industry?: StringWithAggregatesFilter<"Campaign"> | string
    targetAudience?: StringWithAggregatesFilter<"Campaign"> | string
    tone?: EnumToneWithAggregatesFilter<"Campaign"> | $Enums.Tone
    description?: StringNullableWithAggregatesFilter<"Campaign"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
  }

  export type HeadlineWhereInput = {
    AND?: HeadlineWhereInput | HeadlineWhereInput[]
    OR?: HeadlineWhereInput[]
    NOT?: HeadlineWhereInput | HeadlineWhereInput[]
    id?: IntFilter<"Headline"> | number
    campaignId?: IntFilter<"Headline"> | number
    text?: StringNullableFilter<"Headline"> | string | null
    status?: EnumGenerationStatusFilter<"Headline"> | $Enums.GenerationStatus
    createdAt?: DateTimeFilter<"Headline"> | Date | string
    updatedAt?: DateTimeFilter<"Headline"> | Date | string
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
    creatives?: CreativeListRelationFilter
  }

  export type HeadlineOrderByWithRelationInput = {
    id?: SortOrder
    campaignId?: SortOrder
    text?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    campaign?: CampaignOrderByWithRelationInput
    creatives?: CreativeOrderByRelationAggregateInput
  }

  export type HeadlineWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HeadlineWhereInput | HeadlineWhereInput[]
    OR?: HeadlineWhereInput[]
    NOT?: HeadlineWhereInput | HeadlineWhereInput[]
    campaignId?: IntFilter<"Headline"> | number
    text?: StringNullableFilter<"Headline"> | string | null
    status?: EnumGenerationStatusFilter<"Headline"> | $Enums.GenerationStatus
    createdAt?: DateTimeFilter<"Headline"> | Date | string
    updatedAt?: DateTimeFilter<"Headline"> | Date | string
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
    creatives?: CreativeListRelationFilter
  }, "id">

  export type HeadlineOrderByWithAggregationInput = {
    id?: SortOrder
    campaignId?: SortOrder
    text?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HeadlineCountOrderByAggregateInput
    _avg?: HeadlineAvgOrderByAggregateInput
    _max?: HeadlineMaxOrderByAggregateInput
    _min?: HeadlineMinOrderByAggregateInput
    _sum?: HeadlineSumOrderByAggregateInput
  }

  export type HeadlineScalarWhereWithAggregatesInput = {
    AND?: HeadlineScalarWhereWithAggregatesInput | HeadlineScalarWhereWithAggregatesInput[]
    OR?: HeadlineScalarWhereWithAggregatesInput[]
    NOT?: HeadlineScalarWhereWithAggregatesInput | HeadlineScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Headline"> | number
    campaignId?: IntWithAggregatesFilter<"Headline"> | number
    text?: StringNullableWithAggregatesFilter<"Headline"> | string | null
    status?: EnumGenerationStatusWithAggregatesFilter<"Headline"> | $Enums.GenerationStatus
    createdAt?: DateTimeWithAggregatesFilter<"Headline"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Headline"> | Date | string
  }

  export type ImageWhereInput = {
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    id?: IntFilter<"Image"> | number
    campaignId?: IntFilter<"Image"> | number
    url?: StringNullableFilter<"Image"> | string | null
    prompt?: StringNullableFilter<"Image"> | string | null
    status?: EnumGenerationStatusFilter<"Image"> | $Enums.GenerationStatus
    createdAt?: DateTimeFilter<"Image"> | Date | string
    updatedAt?: DateTimeFilter<"Image"> | Date | string
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
    creatives?: CreativeListRelationFilter
  }

  export type ImageOrderByWithRelationInput = {
    id?: SortOrder
    campaignId?: SortOrder
    url?: SortOrderInput | SortOrder
    prompt?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    campaign?: CampaignOrderByWithRelationInput
    creatives?: CreativeOrderByRelationAggregateInput
  }

  export type ImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    campaignId?: IntFilter<"Image"> | number
    url?: StringNullableFilter<"Image"> | string | null
    prompt?: StringNullableFilter<"Image"> | string | null
    status?: EnumGenerationStatusFilter<"Image"> | $Enums.GenerationStatus
    createdAt?: DateTimeFilter<"Image"> | Date | string
    updatedAt?: DateTimeFilter<"Image"> | Date | string
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
    creatives?: CreativeListRelationFilter
  }, "id">

  export type ImageOrderByWithAggregationInput = {
    id?: SortOrder
    campaignId?: SortOrder
    url?: SortOrderInput | SortOrder
    prompt?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ImageCountOrderByAggregateInput
    _avg?: ImageAvgOrderByAggregateInput
    _max?: ImageMaxOrderByAggregateInput
    _min?: ImageMinOrderByAggregateInput
    _sum?: ImageSumOrderByAggregateInput
  }

  export type ImageScalarWhereWithAggregatesInput = {
    AND?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    OR?: ImageScalarWhereWithAggregatesInput[]
    NOT?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Image"> | number
    campaignId?: IntWithAggregatesFilter<"Image"> | number
    url?: StringNullableWithAggregatesFilter<"Image"> | string | null
    prompt?: StringNullableWithAggregatesFilter<"Image"> | string | null
    status?: EnumGenerationStatusWithAggregatesFilter<"Image"> | $Enums.GenerationStatus
    createdAt?: DateTimeWithAggregatesFilter<"Image"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Image"> | Date | string
  }

  export type CreativeWhereInput = {
    AND?: CreativeWhereInput | CreativeWhereInput[]
    OR?: CreativeWhereInput[]
    NOT?: CreativeWhereInput | CreativeWhereInput[]
    id?: IntFilter<"Creative"> | number
    campaignId?: IntNullableFilter<"Creative"> | number | null
    headlineId?: IntNullableFilter<"Creative"> | number | null
    imageId?: IntNullableFilter<"Creative"> | number | null
    createdAt?: DateTimeFilter<"Creative"> | Date | string
    updatedAt?: DateTimeFilter<"Creative"> | Date | string
    campaign?: XOR<CampaignNullableScalarRelationFilter, CampaignWhereInput> | null
    headline?: XOR<HeadlineNullableScalarRelationFilter, HeadlineWhereInput> | null
    image?: XOR<ImageNullableScalarRelationFilter, ImageWhereInput> | null
  }

  export type CreativeOrderByWithRelationInput = {
    id?: SortOrder
    campaignId?: SortOrderInput | SortOrder
    headlineId?: SortOrderInput | SortOrder
    imageId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    campaign?: CampaignOrderByWithRelationInput
    headline?: HeadlineOrderByWithRelationInput
    image?: ImageOrderByWithRelationInput
  }

  export type CreativeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CreativeWhereInput | CreativeWhereInput[]
    OR?: CreativeWhereInput[]
    NOT?: CreativeWhereInput | CreativeWhereInput[]
    campaignId?: IntNullableFilter<"Creative"> | number | null
    headlineId?: IntNullableFilter<"Creative"> | number | null
    imageId?: IntNullableFilter<"Creative"> | number | null
    createdAt?: DateTimeFilter<"Creative"> | Date | string
    updatedAt?: DateTimeFilter<"Creative"> | Date | string
    campaign?: XOR<CampaignNullableScalarRelationFilter, CampaignWhereInput> | null
    headline?: XOR<HeadlineNullableScalarRelationFilter, HeadlineWhereInput> | null
    image?: XOR<ImageNullableScalarRelationFilter, ImageWhereInput> | null
  }, "id">

  export type CreativeOrderByWithAggregationInput = {
    id?: SortOrder
    campaignId?: SortOrderInput | SortOrder
    headlineId?: SortOrderInput | SortOrder
    imageId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CreativeCountOrderByAggregateInput
    _avg?: CreativeAvgOrderByAggregateInput
    _max?: CreativeMaxOrderByAggregateInput
    _min?: CreativeMinOrderByAggregateInput
    _sum?: CreativeSumOrderByAggregateInput
  }

  export type CreativeScalarWhereWithAggregatesInput = {
    AND?: CreativeScalarWhereWithAggregatesInput | CreativeScalarWhereWithAggregatesInput[]
    OR?: CreativeScalarWhereWithAggregatesInput[]
    NOT?: CreativeScalarWhereWithAggregatesInput | CreativeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Creative"> | number
    campaignId?: IntNullableWithAggregatesFilter<"Creative"> | number | null
    headlineId?: IntNullableWithAggregatesFilter<"Creative"> | number | null
    imageId?: IntNullableWithAggregatesFilter<"Creative"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Creative"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Creative"> | Date | string
  }

  export type CampaignCreateInput = {
    name: string
    industry: string
    targetAudience: string
    tone: $Enums.Tone
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    headlines?: HeadlineCreateNestedManyWithoutCampaignInput
    images?: ImageCreateNestedManyWithoutCampaignInput
    creatives?: CreativeCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateInput = {
    id?: number
    name: string
    industry: string
    targetAudience: string
    tone: $Enums.Tone
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    headlines?: HeadlineUncheckedCreateNestedManyWithoutCampaignInput
    images?: ImageUncheckedCreateNestedManyWithoutCampaignInput
    creatives?: CreativeUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    targetAudience?: StringFieldUpdateOperationsInput | string
    tone?: EnumToneFieldUpdateOperationsInput | $Enums.Tone
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    headlines?: HeadlineUpdateManyWithoutCampaignNestedInput
    images?: ImageUpdateManyWithoutCampaignNestedInput
    creatives?: CreativeUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    targetAudience?: StringFieldUpdateOperationsInput | string
    tone?: EnumToneFieldUpdateOperationsInput | $Enums.Tone
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    headlines?: HeadlineUncheckedUpdateManyWithoutCampaignNestedInput
    images?: ImageUncheckedUpdateManyWithoutCampaignNestedInput
    creatives?: CreativeUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignCreateManyInput = {
    id?: number
    name: string
    industry: string
    targetAudience: string
    tone: $Enums.Tone
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    targetAudience?: StringFieldUpdateOperationsInput | string
    tone?: EnumToneFieldUpdateOperationsInput | $Enums.Tone
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    targetAudience?: StringFieldUpdateOperationsInput | string
    tone?: EnumToneFieldUpdateOperationsInput | $Enums.Tone
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeadlineCreateInput = {
    text?: string | null
    status: $Enums.GenerationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    campaign: CampaignCreateNestedOneWithoutHeadlinesInput
    creatives?: CreativeCreateNestedManyWithoutHeadlineInput
  }

  export type HeadlineUncheckedCreateInput = {
    id?: number
    campaignId: number
    text?: string | null
    status: $Enums.GenerationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    creatives?: CreativeUncheckedCreateNestedManyWithoutHeadlineInput
  }

  export type HeadlineUpdateInput = {
    text?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGenerationStatusFieldUpdateOperationsInput | $Enums.GenerationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneRequiredWithoutHeadlinesNestedInput
    creatives?: CreativeUpdateManyWithoutHeadlineNestedInput
  }

  export type HeadlineUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    campaignId?: IntFieldUpdateOperationsInput | number
    text?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGenerationStatusFieldUpdateOperationsInput | $Enums.GenerationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatives?: CreativeUncheckedUpdateManyWithoutHeadlineNestedInput
  }

  export type HeadlineCreateManyInput = {
    id?: number
    campaignId: number
    text?: string | null
    status: $Enums.GenerationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HeadlineUpdateManyMutationInput = {
    text?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGenerationStatusFieldUpdateOperationsInput | $Enums.GenerationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeadlineUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    campaignId?: IntFieldUpdateOperationsInput | number
    text?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGenerationStatusFieldUpdateOperationsInput | $Enums.GenerationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageCreateInput = {
    url?: string | null
    prompt?: string | null
    status: $Enums.GenerationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    campaign: CampaignCreateNestedOneWithoutImagesInput
    creatives?: CreativeCreateNestedManyWithoutImageInput
  }

  export type ImageUncheckedCreateInput = {
    id?: number
    campaignId: number
    url?: string | null
    prompt?: string | null
    status: $Enums.GenerationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    creatives?: CreativeUncheckedCreateNestedManyWithoutImageInput
  }

  export type ImageUpdateInput = {
    url?: NullableStringFieldUpdateOperationsInput | string | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGenerationStatusFieldUpdateOperationsInput | $Enums.GenerationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneRequiredWithoutImagesNestedInput
    creatives?: CreativeUpdateManyWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    campaignId?: IntFieldUpdateOperationsInput | number
    url?: NullableStringFieldUpdateOperationsInput | string | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGenerationStatusFieldUpdateOperationsInput | $Enums.GenerationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatives?: CreativeUncheckedUpdateManyWithoutImageNestedInput
  }

  export type ImageCreateManyInput = {
    id?: number
    campaignId: number
    url?: string | null
    prompt?: string | null
    status: $Enums.GenerationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageUpdateManyMutationInput = {
    url?: NullableStringFieldUpdateOperationsInput | string | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGenerationStatusFieldUpdateOperationsInput | $Enums.GenerationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    campaignId?: IntFieldUpdateOperationsInput | number
    url?: NullableStringFieldUpdateOperationsInput | string | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGenerationStatusFieldUpdateOperationsInput | $Enums.GenerationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreativeCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    campaign?: CampaignCreateNestedOneWithoutCreativesInput
    headline?: HeadlineCreateNestedOneWithoutCreativesInput
    image?: ImageCreateNestedOneWithoutCreativesInput
  }

  export type CreativeUncheckedCreateInput = {
    id?: number
    campaignId?: number | null
    headlineId?: number | null
    imageId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CreativeUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneWithoutCreativesNestedInput
    headline?: HeadlineUpdateOneWithoutCreativesNestedInput
    image?: ImageUpdateOneWithoutCreativesNestedInput
  }

  export type CreativeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    campaignId?: NullableIntFieldUpdateOperationsInput | number | null
    headlineId?: NullableIntFieldUpdateOperationsInput | number | null
    imageId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreativeCreateManyInput = {
    id?: number
    campaignId?: number | null
    headlineId?: number | null
    imageId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CreativeUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreativeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    campaignId?: NullableIntFieldUpdateOperationsInput | number | null
    headlineId?: NullableIntFieldUpdateOperationsInput | number | null
    imageId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumToneFilter<$PrismaModel = never> = {
    equals?: $Enums.Tone | EnumToneFieldRefInput<$PrismaModel>
    in?: $Enums.Tone[] | ListEnumToneFieldRefInput<$PrismaModel>
    notIn?: $Enums.Tone[] | ListEnumToneFieldRefInput<$PrismaModel>
    not?: NestedEnumToneFilter<$PrismaModel> | $Enums.Tone
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type HeadlineListRelationFilter = {
    every?: HeadlineWhereInput
    some?: HeadlineWhereInput
    none?: HeadlineWhereInput
  }

  export type ImageListRelationFilter = {
    every?: ImageWhereInput
    some?: ImageWhereInput
    none?: ImageWhereInput
  }

  export type CreativeListRelationFilter = {
    every?: CreativeWhereInput
    some?: CreativeWhereInput
    none?: CreativeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type HeadlineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CreativeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CampaignCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    industry?: SortOrder
    targetAudience?: SortOrder
    tone?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaignAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CampaignMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    industry?: SortOrder
    targetAudience?: SortOrder
    tone?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaignMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    industry?: SortOrder
    targetAudience?: SortOrder
    tone?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaignSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumToneWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Tone | EnumToneFieldRefInput<$PrismaModel>
    in?: $Enums.Tone[] | ListEnumToneFieldRefInput<$PrismaModel>
    notIn?: $Enums.Tone[] | ListEnumToneFieldRefInput<$PrismaModel>
    not?: NestedEnumToneWithAggregatesFilter<$PrismaModel> | $Enums.Tone
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumToneFilter<$PrismaModel>
    _max?: NestedEnumToneFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumGenerationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GenerationStatus | EnumGenerationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GenerationStatus[] | ListEnumGenerationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GenerationStatus[] | ListEnumGenerationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGenerationStatusFilter<$PrismaModel> | $Enums.GenerationStatus
  }

  export type CampaignScalarRelationFilter = {
    is?: CampaignWhereInput
    isNot?: CampaignWhereInput
  }

  export type HeadlineCountOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    text?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HeadlineAvgOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
  }

  export type HeadlineMaxOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    text?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HeadlineMinOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    text?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HeadlineSumOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
  }

  export type EnumGenerationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GenerationStatus | EnumGenerationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GenerationStatus[] | ListEnumGenerationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GenerationStatus[] | ListEnumGenerationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGenerationStatusWithAggregatesFilter<$PrismaModel> | $Enums.GenerationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenerationStatusFilter<$PrismaModel>
    _max?: NestedEnumGenerationStatusFilter<$PrismaModel>
  }

  export type ImageCountOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    url?: SortOrder
    prompt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImageAvgOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
  }

  export type ImageMaxOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    url?: SortOrder
    prompt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImageMinOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    url?: SortOrder
    prompt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImageSumOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CampaignNullableScalarRelationFilter = {
    is?: CampaignWhereInput | null
    isNot?: CampaignWhereInput | null
  }

  export type HeadlineNullableScalarRelationFilter = {
    is?: HeadlineWhereInput | null
    isNot?: HeadlineWhereInput | null
  }

  export type ImageNullableScalarRelationFilter = {
    is?: ImageWhereInput | null
    isNot?: ImageWhereInput | null
  }

  export type CreativeCountOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    headlineId?: SortOrder
    imageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CreativeAvgOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    headlineId?: SortOrder
    imageId?: SortOrder
  }

  export type CreativeMaxOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    headlineId?: SortOrder
    imageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CreativeMinOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    headlineId?: SortOrder
    imageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CreativeSumOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    headlineId?: SortOrder
    imageId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type HeadlineCreateNestedManyWithoutCampaignInput = {
    create?: XOR<HeadlineCreateWithoutCampaignInput, HeadlineUncheckedCreateWithoutCampaignInput> | HeadlineCreateWithoutCampaignInput[] | HeadlineUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: HeadlineCreateOrConnectWithoutCampaignInput | HeadlineCreateOrConnectWithoutCampaignInput[]
    createMany?: HeadlineCreateManyCampaignInputEnvelope
    connect?: HeadlineWhereUniqueInput | HeadlineWhereUniqueInput[]
  }

  export type ImageCreateNestedManyWithoutCampaignInput = {
    create?: XOR<ImageCreateWithoutCampaignInput, ImageUncheckedCreateWithoutCampaignInput> | ImageCreateWithoutCampaignInput[] | ImageUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutCampaignInput | ImageCreateOrConnectWithoutCampaignInput[]
    createMany?: ImageCreateManyCampaignInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type CreativeCreateNestedManyWithoutCampaignInput = {
    create?: XOR<CreativeCreateWithoutCampaignInput, CreativeUncheckedCreateWithoutCampaignInput> | CreativeCreateWithoutCampaignInput[] | CreativeUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: CreativeCreateOrConnectWithoutCampaignInput | CreativeCreateOrConnectWithoutCampaignInput[]
    createMany?: CreativeCreateManyCampaignInputEnvelope
    connect?: CreativeWhereUniqueInput | CreativeWhereUniqueInput[]
  }

  export type HeadlineUncheckedCreateNestedManyWithoutCampaignInput = {
    create?: XOR<HeadlineCreateWithoutCampaignInput, HeadlineUncheckedCreateWithoutCampaignInput> | HeadlineCreateWithoutCampaignInput[] | HeadlineUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: HeadlineCreateOrConnectWithoutCampaignInput | HeadlineCreateOrConnectWithoutCampaignInput[]
    createMany?: HeadlineCreateManyCampaignInputEnvelope
    connect?: HeadlineWhereUniqueInput | HeadlineWhereUniqueInput[]
  }

  export type ImageUncheckedCreateNestedManyWithoutCampaignInput = {
    create?: XOR<ImageCreateWithoutCampaignInput, ImageUncheckedCreateWithoutCampaignInput> | ImageCreateWithoutCampaignInput[] | ImageUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutCampaignInput | ImageCreateOrConnectWithoutCampaignInput[]
    createMany?: ImageCreateManyCampaignInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type CreativeUncheckedCreateNestedManyWithoutCampaignInput = {
    create?: XOR<CreativeCreateWithoutCampaignInput, CreativeUncheckedCreateWithoutCampaignInput> | CreativeCreateWithoutCampaignInput[] | CreativeUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: CreativeCreateOrConnectWithoutCampaignInput | CreativeCreateOrConnectWithoutCampaignInput[]
    createMany?: CreativeCreateManyCampaignInputEnvelope
    connect?: CreativeWhereUniqueInput | CreativeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumToneFieldUpdateOperationsInput = {
    set?: $Enums.Tone
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type HeadlineUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<HeadlineCreateWithoutCampaignInput, HeadlineUncheckedCreateWithoutCampaignInput> | HeadlineCreateWithoutCampaignInput[] | HeadlineUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: HeadlineCreateOrConnectWithoutCampaignInput | HeadlineCreateOrConnectWithoutCampaignInput[]
    upsert?: HeadlineUpsertWithWhereUniqueWithoutCampaignInput | HeadlineUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: HeadlineCreateManyCampaignInputEnvelope
    set?: HeadlineWhereUniqueInput | HeadlineWhereUniqueInput[]
    disconnect?: HeadlineWhereUniqueInput | HeadlineWhereUniqueInput[]
    delete?: HeadlineWhereUniqueInput | HeadlineWhereUniqueInput[]
    connect?: HeadlineWhereUniqueInput | HeadlineWhereUniqueInput[]
    update?: HeadlineUpdateWithWhereUniqueWithoutCampaignInput | HeadlineUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: HeadlineUpdateManyWithWhereWithoutCampaignInput | HeadlineUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: HeadlineScalarWhereInput | HeadlineScalarWhereInput[]
  }

  export type ImageUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<ImageCreateWithoutCampaignInput, ImageUncheckedCreateWithoutCampaignInput> | ImageCreateWithoutCampaignInput[] | ImageUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutCampaignInput | ImageCreateOrConnectWithoutCampaignInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutCampaignInput | ImageUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: ImageCreateManyCampaignInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutCampaignInput | ImageUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutCampaignInput | ImageUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type CreativeUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<CreativeCreateWithoutCampaignInput, CreativeUncheckedCreateWithoutCampaignInput> | CreativeCreateWithoutCampaignInput[] | CreativeUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: CreativeCreateOrConnectWithoutCampaignInput | CreativeCreateOrConnectWithoutCampaignInput[]
    upsert?: CreativeUpsertWithWhereUniqueWithoutCampaignInput | CreativeUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: CreativeCreateManyCampaignInputEnvelope
    set?: CreativeWhereUniqueInput | CreativeWhereUniqueInput[]
    disconnect?: CreativeWhereUniqueInput | CreativeWhereUniqueInput[]
    delete?: CreativeWhereUniqueInput | CreativeWhereUniqueInput[]
    connect?: CreativeWhereUniqueInput | CreativeWhereUniqueInput[]
    update?: CreativeUpdateWithWhereUniqueWithoutCampaignInput | CreativeUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: CreativeUpdateManyWithWhereWithoutCampaignInput | CreativeUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: CreativeScalarWhereInput | CreativeScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type HeadlineUncheckedUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<HeadlineCreateWithoutCampaignInput, HeadlineUncheckedCreateWithoutCampaignInput> | HeadlineCreateWithoutCampaignInput[] | HeadlineUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: HeadlineCreateOrConnectWithoutCampaignInput | HeadlineCreateOrConnectWithoutCampaignInput[]
    upsert?: HeadlineUpsertWithWhereUniqueWithoutCampaignInput | HeadlineUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: HeadlineCreateManyCampaignInputEnvelope
    set?: HeadlineWhereUniqueInput | HeadlineWhereUniqueInput[]
    disconnect?: HeadlineWhereUniqueInput | HeadlineWhereUniqueInput[]
    delete?: HeadlineWhereUniqueInput | HeadlineWhereUniqueInput[]
    connect?: HeadlineWhereUniqueInput | HeadlineWhereUniqueInput[]
    update?: HeadlineUpdateWithWhereUniqueWithoutCampaignInput | HeadlineUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: HeadlineUpdateManyWithWhereWithoutCampaignInput | HeadlineUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: HeadlineScalarWhereInput | HeadlineScalarWhereInput[]
  }

  export type ImageUncheckedUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<ImageCreateWithoutCampaignInput, ImageUncheckedCreateWithoutCampaignInput> | ImageCreateWithoutCampaignInput[] | ImageUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutCampaignInput | ImageCreateOrConnectWithoutCampaignInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutCampaignInput | ImageUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: ImageCreateManyCampaignInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutCampaignInput | ImageUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutCampaignInput | ImageUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type CreativeUncheckedUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<CreativeCreateWithoutCampaignInput, CreativeUncheckedCreateWithoutCampaignInput> | CreativeCreateWithoutCampaignInput[] | CreativeUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: CreativeCreateOrConnectWithoutCampaignInput | CreativeCreateOrConnectWithoutCampaignInput[]
    upsert?: CreativeUpsertWithWhereUniqueWithoutCampaignInput | CreativeUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: CreativeCreateManyCampaignInputEnvelope
    set?: CreativeWhereUniqueInput | CreativeWhereUniqueInput[]
    disconnect?: CreativeWhereUniqueInput | CreativeWhereUniqueInput[]
    delete?: CreativeWhereUniqueInput | CreativeWhereUniqueInput[]
    connect?: CreativeWhereUniqueInput | CreativeWhereUniqueInput[]
    update?: CreativeUpdateWithWhereUniqueWithoutCampaignInput | CreativeUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: CreativeUpdateManyWithWhereWithoutCampaignInput | CreativeUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: CreativeScalarWhereInput | CreativeScalarWhereInput[]
  }

  export type CampaignCreateNestedOneWithoutHeadlinesInput = {
    create?: XOR<CampaignCreateWithoutHeadlinesInput, CampaignUncheckedCreateWithoutHeadlinesInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutHeadlinesInput
    connect?: CampaignWhereUniqueInput
  }

  export type CreativeCreateNestedManyWithoutHeadlineInput = {
    create?: XOR<CreativeCreateWithoutHeadlineInput, CreativeUncheckedCreateWithoutHeadlineInput> | CreativeCreateWithoutHeadlineInput[] | CreativeUncheckedCreateWithoutHeadlineInput[]
    connectOrCreate?: CreativeCreateOrConnectWithoutHeadlineInput | CreativeCreateOrConnectWithoutHeadlineInput[]
    createMany?: CreativeCreateManyHeadlineInputEnvelope
    connect?: CreativeWhereUniqueInput | CreativeWhereUniqueInput[]
  }

  export type CreativeUncheckedCreateNestedManyWithoutHeadlineInput = {
    create?: XOR<CreativeCreateWithoutHeadlineInput, CreativeUncheckedCreateWithoutHeadlineInput> | CreativeCreateWithoutHeadlineInput[] | CreativeUncheckedCreateWithoutHeadlineInput[]
    connectOrCreate?: CreativeCreateOrConnectWithoutHeadlineInput | CreativeCreateOrConnectWithoutHeadlineInput[]
    createMany?: CreativeCreateManyHeadlineInputEnvelope
    connect?: CreativeWhereUniqueInput | CreativeWhereUniqueInput[]
  }

  export type EnumGenerationStatusFieldUpdateOperationsInput = {
    set?: $Enums.GenerationStatus
  }

  export type CampaignUpdateOneRequiredWithoutHeadlinesNestedInput = {
    create?: XOR<CampaignCreateWithoutHeadlinesInput, CampaignUncheckedCreateWithoutHeadlinesInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutHeadlinesInput
    upsert?: CampaignUpsertWithoutHeadlinesInput
    connect?: CampaignWhereUniqueInput
    update?: XOR<XOR<CampaignUpdateToOneWithWhereWithoutHeadlinesInput, CampaignUpdateWithoutHeadlinesInput>, CampaignUncheckedUpdateWithoutHeadlinesInput>
  }

  export type CreativeUpdateManyWithoutHeadlineNestedInput = {
    create?: XOR<CreativeCreateWithoutHeadlineInput, CreativeUncheckedCreateWithoutHeadlineInput> | CreativeCreateWithoutHeadlineInput[] | CreativeUncheckedCreateWithoutHeadlineInput[]
    connectOrCreate?: CreativeCreateOrConnectWithoutHeadlineInput | CreativeCreateOrConnectWithoutHeadlineInput[]
    upsert?: CreativeUpsertWithWhereUniqueWithoutHeadlineInput | CreativeUpsertWithWhereUniqueWithoutHeadlineInput[]
    createMany?: CreativeCreateManyHeadlineInputEnvelope
    set?: CreativeWhereUniqueInput | CreativeWhereUniqueInput[]
    disconnect?: CreativeWhereUniqueInput | CreativeWhereUniqueInput[]
    delete?: CreativeWhereUniqueInput | CreativeWhereUniqueInput[]
    connect?: CreativeWhereUniqueInput | CreativeWhereUniqueInput[]
    update?: CreativeUpdateWithWhereUniqueWithoutHeadlineInput | CreativeUpdateWithWhereUniqueWithoutHeadlineInput[]
    updateMany?: CreativeUpdateManyWithWhereWithoutHeadlineInput | CreativeUpdateManyWithWhereWithoutHeadlineInput[]
    deleteMany?: CreativeScalarWhereInput | CreativeScalarWhereInput[]
  }

  export type CreativeUncheckedUpdateManyWithoutHeadlineNestedInput = {
    create?: XOR<CreativeCreateWithoutHeadlineInput, CreativeUncheckedCreateWithoutHeadlineInput> | CreativeCreateWithoutHeadlineInput[] | CreativeUncheckedCreateWithoutHeadlineInput[]
    connectOrCreate?: CreativeCreateOrConnectWithoutHeadlineInput | CreativeCreateOrConnectWithoutHeadlineInput[]
    upsert?: CreativeUpsertWithWhereUniqueWithoutHeadlineInput | CreativeUpsertWithWhereUniqueWithoutHeadlineInput[]
    createMany?: CreativeCreateManyHeadlineInputEnvelope
    set?: CreativeWhereUniqueInput | CreativeWhereUniqueInput[]
    disconnect?: CreativeWhereUniqueInput | CreativeWhereUniqueInput[]
    delete?: CreativeWhereUniqueInput | CreativeWhereUniqueInput[]
    connect?: CreativeWhereUniqueInput | CreativeWhereUniqueInput[]
    update?: CreativeUpdateWithWhereUniqueWithoutHeadlineInput | CreativeUpdateWithWhereUniqueWithoutHeadlineInput[]
    updateMany?: CreativeUpdateManyWithWhereWithoutHeadlineInput | CreativeUpdateManyWithWhereWithoutHeadlineInput[]
    deleteMany?: CreativeScalarWhereInput | CreativeScalarWhereInput[]
  }

  export type CampaignCreateNestedOneWithoutImagesInput = {
    create?: XOR<CampaignCreateWithoutImagesInput, CampaignUncheckedCreateWithoutImagesInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutImagesInput
    connect?: CampaignWhereUniqueInput
  }

  export type CreativeCreateNestedManyWithoutImageInput = {
    create?: XOR<CreativeCreateWithoutImageInput, CreativeUncheckedCreateWithoutImageInput> | CreativeCreateWithoutImageInput[] | CreativeUncheckedCreateWithoutImageInput[]
    connectOrCreate?: CreativeCreateOrConnectWithoutImageInput | CreativeCreateOrConnectWithoutImageInput[]
    createMany?: CreativeCreateManyImageInputEnvelope
    connect?: CreativeWhereUniqueInput | CreativeWhereUniqueInput[]
  }

  export type CreativeUncheckedCreateNestedManyWithoutImageInput = {
    create?: XOR<CreativeCreateWithoutImageInput, CreativeUncheckedCreateWithoutImageInput> | CreativeCreateWithoutImageInput[] | CreativeUncheckedCreateWithoutImageInput[]
    connectOrCreate?: CreativeCreateOrConnectWithoutImageInput | CreativeCreateOrConnectWithoutImageInput[]
    createMany?: CreativeCreateManyImageInputEnvelope
    connect?: CreativeWhereUniqueInput | CreativeWhereUniqueInput[]
  }

  export type CampaignUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<CampaignCreateWithoutImagesInput, CampaignUncheckedCreateWithoutImagesInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutImagesInput
    upsert?: CampaignUpsertWithoutImagesInput
    connect?: CampaignWhereUniqueInput
    update?: XOR<XOR<CampaignUpdateToOneWithWhereWithoutImagesInput, CampaignUpdateWithoutImagesInput>, CampaignUncheckedUpdateWithoutImagesInput>
  }

  export type CreativeUpdateManyWithoutImageNestedInput = {
    create?: XOR<CreativeCreateWithoutImageInput, CreativeUncheckedCreateWithoutImageInput> | CreativeCreateWithoutImageInput[] | CreativeUncheckedCreateWithoutImageInput[]
    connectOrCreate?: CreativeCreateOrConnectWithoutImageInput | CreativeCreateOrConnectWithoutImageInput[]
    upsert?: CreativeUpsertWithWhereUniqueWithoutImageInput | CreativeUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: CreativeCreateManyImageInputEnvelope
    set?: CreativeWhereUniqueInput | CreativeWhereUniqueInput[]
    disconnect?: CreativeWhereUniqueInput | CreativeWhereUniqueInput[]
    delete?: CreativeWhereUniqueInput | CreativeWhereUniqueInput[]
    connect?: CreativeWhereUniqueInput | CreativeWhereUniqueInput[]
    update?: CreativeUpdateWithWhereUniqueWithoutImageInput | CreativeUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: CreativeUpdateManyWithWhereWithoutImageInput | CreativeUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: CreativeScalarWhereInput | CreativeScalarWhereInput[]
  }

  export type CreativeUncheckedUpdateManyWithoutImageNestedInput = {
    create?: XOR<CreativeCreateWithoutImageInput, CreativeUncheckedCreateWithoutImageInput> | CreativeCreateWithoutImageInput[] | CreativeUncheckedCreateWithoutImageInput[]
    connectOrCreate?: CreativeCreateOrConnectWithoutImageInput | CreativeCreateOrConnectWithoutImageInput[]
    upsert?: CreativeUpsertWithWhereUniqueWithoutImageInput | CreativeUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: CreativeCreateManyImageInputEnvelope
    set?: CreativeWhereUniqueInput | CreativeWhereUniqueInput[]
    disconnect?: CreativeWhereUniqueInput | CreativeWhereUniqueInput[]
    delete?: CreativeWhereUniqueInput | CreativeWhereUniqueInput[]
    connect?: CreativeWhereUniqueInput | CreativeWhereUniqueInput[]
    update?: CreativeUpdateWithWhereUniqueWithoutImageInput | CreativeUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: CreativeUpdateManyWithWhereWithoutImageInput | CreativeUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: CreativeScalarWhereInput | CreativeScalarWhereInput[]
  }

  export type CampaignCreateNestedOneWithoutCreativesInput = {
    create?: XOR<CampaignCreateWithoutCreativesInput, CampaignUncheckedCreateWithoutCreativesInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutCreativesInput
    connect?: CampaignWhereUniqueInput
  }

  export type HeadlineCreateNestedOneWithoutCreativesInput = {
    create?: XOR<HeadlineCreateWithoutCreativesInput, HeadlineUncheckedCreateWithoutCreativesInput>
    connectOrCreate?: HeadlineCreateOrConnectWithoutCreativesInput
    connect?: HeadlineWhereUniqueInput
  }

  export type ImageCreateNestedOneWithoutCreativesInput = {
    create?: XOR<ImageCreateWithoutCreativesInput, ImageUncheckedCreateWithoutCreativesInput>
    connectOrCreate?: ImageCreateOrConnectWithoutCreativesInput
    connect?: ImageWhereUniqueInput
  }

  export type CampaignUpdateOneWithoutCreativesNestedInput = {
    create?: XOR<CampaignCreateWithoutCreativesInput, CampaignUncheckedCreateWithoutCreativesInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutCreativesInput
    upsert?: CampaignUpsertWithoutCreativesInput
    disconnect?: CampaignWhereInput | boolean
    delete?: CampaignWhereInput | boolean
    connect?: CampaignWhereUniqueInput
    update?: XOR<XOR<CampaignUpdateToOneWithWhereWithoutCreativesInput, CampaignUpdateWithoutCreativesInput>, CampaignUncheckedUpdateWithoutCreativesInput>
  }

  export type HeadlineUpdateOneWithoutCreativesNestedInput = {
    create?: XOR<HeadlineCreateWithoutCreativesInput, HeadlineUncheckedCreateWithoutCreativesInput>
    connectOrCreate?: HeadlineCreateOrConnectWithoutCreativesInput
    upsert?: HeadlineUpsertWithoutCreativesInput
    disconnect?: HeadlineWhereInput | boolean
    delete?: HeadlineWhereInput | boolean
    connect?: HeadlineWhereUniqueInput
    update?: XOR<XOR<HeadlineUpdateToOneWithWhereWithoutCreativesInput, HeadlineUpdateWithoutCreativesInput>, HeadlineUncheckedUpdateWithoutCreativesInput>
  }

  export type ImageUpdateOneWithoutCreativesNestedInput = {
    create?: XOR<ImageCreateWithoutCreativesInput, ImageUncheckedCreateWithoutCreativesInput>
    connectOrCreate?: ImageCreateOrConnectWithoutCreativesInput
    upsert?: ImageUpsertWithoutCreativesInput
    disconnect?: ImageWhereInput | boolean
    delete?: ImageWhereInput | boolean
    connect?: ImageWhereUniqueInput
    update?: XOR<XOR<ImageUpdateToOneWithWhereWithoutCreativesInput, ImageUpdateWithoutCreativesInput>, ImageUncheckedUpdateWithoutCreativesInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumToneFilter<$PrismaModel = never> = {
    equals?: $Enums.Tone | EnumToneFieldRefInput<$PrismaModel>
    in?: $Enums.Tone[] | ListEnumToneFieldRefInput<$PrismaModel>
    notIn?: $Enums.Tone[] | ListEnumToneFieldRefInput<$PrismaModel>
    not?: NestedEnumToneFilter<$PrismaModel> | $Enums.Tone
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumToneWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Tone | EnumToneFieldRefInput<$PrismaModel>
    in?: $Enums.Tone[] | ListEnumToneFieldRefInput<$PrismaModel>
    notIn?: $Enums.Tone[] | ListEnumToneFieldRefInput<$PrismaModel>
    not?: NestedEnumToneWithAggregatesFilter<$PrismaModel> | $Enums.Tone
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumToneFilter<$PrismaModel>
    _max?: NestedEnumToneFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumGenerationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GenerationStatus | EnumGenerationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GenerationStatus[] | ListEnumGenerationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GenerationStatus[] | ListEnumGenerationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGenerationStatusFilter<$PrismaModel> | $Enums.GenerationStatus
  }

  export type NestedEnumGenerationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GenerationStatus | EnumGenerationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GenerationStatus[] | ListEnumGenerationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GenerationStatus[] | ListEnumGenerationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGenerationStatusWithAggregatesFilter<$PrismaModel> | $Enums.GenerationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenerationStatusFilter<$PrismaModel>
    _max?: NestedEnumGenerationStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type HeadlineCreateWithoutCampaignInput = {
    text?: string | null
    status: $Enums.GenerationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    creatives?: CreativeCreateNestedManyWithoutHeadlineInput
  }

  export type HeadlineUncheckedCreateWithoutCampaignInput = {
    id?: number
    text?: string | null
    status: $Enums.GenerationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    creatives?: CreativeUncheckedCreateNestedManyWithoutHeadlineInput
  }

  export type HeadlineCreateOrConnectWithoutCampaignInput = {
    where: HeadlineWhereUniqueInput
    create: XOR<HeadlineCreateWithoutCampaignInput, HeadlineUncheckedCreateWithoutCampaignInput>
  }

  export type HeadlineCreateManyCampaignInputEnvelope = {
    data: HeadlineCreateManyCampaignInput | HeadlineCreateManyCampaignInput[]
    skipDuplicates?: boolean
  }

  export type ImageCreateWithoutCampaignInput = {
    url?: string | null
    prompt?: string | null
    status: $Enums.GenerationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    creatives?: CreativeCreateNestedManyWithoutImageInput
  }

  export type ImageUncheckedCreateWithoutCampaignInput = {
    id?: number
    url?: string | null
    prompt?: string | null
    status: $Enums.GenerationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    creatives?: CreativeUncheckedCreateNestedManyWithoutImageInput
  }

  export type ImageCreateOrConnectWithoutCampaignInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutCampaignInput, ImageUncheckedCreateWithoutCampaignInput>
  }

  export type ImageCreateManyCampaignInputEnvelope = {
    data: ImageCreateManyCampaignInput | ImageCreateManyCampaignInput[]
    skipDuplicates?: boolean
  }

  export type CreativeCreateWithoutCampaignInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    headline?: HeadlineCreateNestedOneWithoutCreativesInput
    image?: ImageCreateNestedOneWithoutCreativesInput
  }

  export type CreativeUncheckedCreateWithoutCampaignInput = {
    id?: number
    headlineId?: number | null
    imageId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CreativeCreateOrConnectWithoutCampaignInput = {
    where: CreativeWhereUniqueInput
    create: XOR<CreativeCreateWithoutCampaignInput, CreativeUncheckedCreateWithoutCampaignInput>
  }

  export type CreativeCreateManyCampaignInputEnvelope = {
    data: CreativeCreateManyCampaignInput | CreativeCreateManyCampaignInput[]
    skipDuplicates?: boolean
  }

  export type HeadlineUpsertWithWhereUniqueWithoutCampaignInput = {
    where: HeadlineWhereUniqueInput
    update: XOR<HeadlineUpdateWithoutCampaignInput, HeadlineUncheckedUpdateWithoutCampaignInput>
    create: XOR<HeadlineCreateWithoutCampaignInput, HeadlineUncheckedCreateWithoutCampaignInput>
  }

  export type HeadlineUpdateWithWhereUniqueWithoutCampaignInput = {
    where: HeadlineWhereUniqueInput
    data: XOR<HeadlineUpdateWithoutCampaignInput, HeadlineUncheckedUpdateWithoutCampaignInput>
  }

  export type HeadlineUpdateManyWithWhereWithoutCampaignInput = {
    where: HeadlineScalarWhereInput
    data: XOR<HeadlineUpdateManyMutationInput, HeadlineUncheckedUpdateManyWithoutCampaignInput>
  }

  export type HeadlineScalarWhereInput = {
    AND?: HeadlineScalarWhereInput | HeadlineScalarWhereInput[]
    OR?: HeadlineScalarWhereInput[]
    NOT?: HeadlineScalarWhereInput | HeadlineScalarWhereInput[]
    id?: IntFilter<"Headline"> | number
    campaignId?: IntFilter<"Headline"> | number
    text?: StringNullableFilter<"Headline"> | string | null
    status?: EnumGenerationStatusFilter<"Headline"> | $Enums.GenerationStatus
    createdAt?: DateTimeFilter<"Headline"> | Date | string
    updatedAt?: DateTimeFilter<"Headline"> | Date | string
  }

  export type ImageUpsertWithWhereUniqueWithoutCampaignInput = {
    where: ImageWhereUniqueInput
    update: XOR<ImageUpdateWithoutCampaignInput, ImageUncheckedUpdateWithoutCampaignInput>
    create: XOR<ImageCreateWithoutCampaignInput, ImageUncheckedCreateWithoutCampaignInput>
  }

  export type ImageUpdateWithWhereUniqueWithoutCampaignInput = {
    where: ImageWhereUniqueInput
    data: XOR<ImageUpdateWithoutCampaignInput, ImageUncheckedUpdateWithoutCampaignInput>
  }

  export type ImageUpdateManyWithWhereWithoutCampaignInput = {
    where: ImageScalarWhereInput
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutCampaignInput>
  }

  export type ImageScalarWhereInput = {
    AND?: ImageScalarWhereInput | ImageScalarWhereInput[]
    OR?: ImageScalarWhereInput[]
    NOT?: ImageScalarWhereInput | ImageScalarWhereInput[]
    id?: IntFilter<"Image"> | number
    campaignId?: IntFilter<"Image"> | number
    url?: StringNullableFilter<"Image"> | string | null
    prompt?: StringNullableFilter<"Image"> | string | null
    status?: EnumGenerationStatusFilter<"Image"> | $Enums.GenerationStatus
    createdAt?: DateTimeFilter<"Image"> | Date | string
    updatedAt?: DateTimeFilter<"Image"> | Date | string
  }

  export type CreativeUpsertWithWhereUniqueWithoutCampaignInput = {
    where: CreativeWhereUniqueInput
    update: XOR<CreativeUpdateWithoutCampaignInput, CreativeUncheckedUpdateWithoutCampaignInput>
    create: XOR<CreativeCreateWithoutCampaignInput, CreativeUncheckedCreateWithoutCampaignInput>
  }

  export type CreativeUpdateWithWhereUniqueWithoutCampaignInput = {
    where: CreativeWhereUniqueInput
    data: XOR<CreativeUpdateWithoutCampaignInput, CreativeUncheckedUpdateWithoutCampaignInput>
  }

  export type CreativeUpdateManyWithWhereWithoutCampaignInput = {
    where: CreativeScalarWhereInput
    data: XOR<CreativeUpdateManyMutationInput, CreativeUncheckedUpdateManyWithoutCampaignInput>
  }

  export type CreativeScalarWhereInput = {
    AND?: CreativeScalarWhereInput | CreativeScalarWhereInput[]
    OR?: CreativeScalarWhereInput[]
    NOT?: CreativeScalarWhereInput | CreativeScalarWhereInput[]
    id?: IntFilter<"Creative"> | number
    campaignId?: IntNullableFilter<"Creative"> | number | null
    headlineId?: IntNullableFilter<"Creative"> | number | null
    imageId?: IntNullableFilter<"Creative"> | number | null
    createdAt?: DateTimeFilter<"Creative"> | Date | string
    updatedAt?: DateTimeFilter<"Creative"> | Date | string
  }

  export type CampaignCreateWithoutHeadlinesInput = {
    name: string
    industry: string
    targetAudience: string
    tone: $Enums.Tone
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageCreateNestedManyWithoutCampaignInput
    creatives?: CreativeCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateWithoutHeadlinesInput = {
    id?: number
    name: string
    industry: string
    targetAudience: string
    tone: $Enums.Tone
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutCampaignInput
    creatives?: CreativeUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutHeadlinesInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutHeadlinesInput, CampaignUncheckedCreateWithoutHeadlinesInput>
  }

  export type CreativeCreateWithoutHeadlineInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    campaign?: CampaignCreateNestedOneWithoutCreativesInput
    image?: ImageCreateNestedOneWithoutCreativesInput
  }

  export type CreativeUncheckedCreateWithoutHeadlineInput = {
    id?: number
    campaignId?: number | null
    imageId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CreativeCreateOrConnectWithoutHeadlineInput = {
    where: CreativeWhereUniqueInput
    create: XOR<CreativeCreateWithoutHeadlineInput, CreativeUncheckedCreateWithoutHeadlineInput>
  }

  export type CreativeCreateManyHeadlineInputEnvelope = {
    data: CreativeCreateManyHeadlineInput | CreativeCreateManyHeadlineInput[]
    skipDuplicates?: boolean
  }

  export type CampaignUpsertWithoutHeadlinesInput = {
    update: XOR<CampaignUpdateWithoutHeadlinesInput, CampaignUncheckedUpdateWithoutHeadlinesInput>
    create: XOR<CampaignCreateWithoutHeadlinesInput, CampaignUncheckedCreateWithoutHeadlinesInput>
    where?: CampaignWhereInput
  }

  export type CampaignUpdateToOneWithWhereWithoutHeadlinesInput = {
    where?: CampaignWhereInput
    data: XOR<CampaignUpdateWithoutHeadlinesInput, CampaignUncheckedUpdateWithoutHeadlinesInput>
  }

  export type CampaignUpdateWithoutHeadlinesInput = {
    name?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    targetAudience?: StringFieldUpdateOperationsInput | string
    tone?: EnumToneFieldUpdateOperationsInput | $Enums.Tone
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUpdateManyWithoutCampaignNestedInput
    creatives?: CreativeUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateWithoutHeadlinesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    targetAudience?: StringFieldUpdateOperationsInput | string
    tone?: EnumToneFieldUpdateOperationsInput | $Enums.Tone
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutCampaignNestedInput
    creatives?: CreativeUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type CreativeUpsertWithWhereUniqueWithoutHeadlineInput = {
    where: CreativeWhereUniqueInput
    update: XOR<CreativeUpdateWithoutHeadlineInput, CreativeUncheckedUpdateWithoutHeadlineInput>
    create: XOR<CreativeCreateWithoutHeadlineInput, CreativeUncheckedCreateWithoutHeadlineInput>
  }

  export type CreativeUpdateWithWhereUniqueWithoutHeadlineInput = {
    where: CreativeWhereUniqueInput
    data: XOR<CreativeUpdateWithoutHeadlineInput, CreativeUncheckedUpdateWithoutHeadlineInput>
  }

  export type CreativeUpdateManyWithWhereWithoutHeadlineInput = {
    where: CreativeScalarWhereInput
    data: XOR<CreativeUpdateManyMutationInput, CreativeUncheckedUpdateManyWithoutHeadlineInput>
  }

  export type CampaignCreateWithoutImagesInput = {
    name: string
    industry: string
    targetAudience: string
    tone: $Enums.Tone
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    headlines?: HeadlineCreateNestedManyWithoutCampaignInput
    creatives?: CreativeCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateWithoutImagesInput = {
    id?: number
    name: string
    industry: string
    targetAudience: string
    tone: $Enums.Tone
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    headlines?: HeadlineUncheckedCreateNestedManyWithoutCampaignInput
    creatives?: CreativeUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutImagesInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutImagesInput, CampaignUncheckedCreateWithoutImagesInput>
  }

  export type CreativeCreateWithoutImageInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    campaign?: CampaignCreateNestedOneWithoutCreativesInput
    headline?: HeadlineCreateNestedOneWithoutCreativesInput
  }

  export type CreativeUncheckedCreateWithoutImageInput = {
    id?: number
    campaignId?: number | null
    headlineId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CreativeCreateOrConnectWithoutImageInput = {
    where: CreativeWhereUniqueInput
    create: XOR<CreativeCreateWithoutImageInput, CreativeUncheckedCreateWithoutImageInput>
  }

  export type CreativeCreateManyImageInputEnvelope = {
    data: CreativeCreateManyImageInput | CreativeCreateManyImageInput[]
    skipDuplicates?: boolean
  }

  export type CampaignUpsertWithoutImagesInput = {
    update: XOR<CampaignUpdateWithoutImagesInput, CampaignUncheckedUpdateWithoutImagesInput>
    create: XOR<CampaignCreateWithoutImagesInput, CampaignUncheckedCreateWithoutImagesInput>
    where?: CampaignWhereInput
  }

  export type CampaignUpdateToOneWithWhereWithoutImagesInput = {
    where?: CampaignWhereInput
    data: XOR<CampaignUpdateWithoutImagesInput, CampaignUncheckedUpdateWithoutImagesInput>
  }

  export type CampaignUpdateWithoutImagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    targetAudience?: StringFieldUpdateOperationsInput | string
    tone?: EnumToneFieldUpdateOperationsInput | $Enums.Tone
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    headlines?: HeadlineUpdateManyWithoutCampaignNestedInput
    creatives?: CreativeUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    targetAudience?: StringFieldUpdateOperationsInput | string
    tone?: EnumToneFieldUpdateOperationsInput | $Enums.Tone
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    headlines?: HeadlineUncheckedUpdateManyWithoutCampaignNestedInput
    creatives?: CreativeUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type CreativeUpsertWithWhereUniqueWithoutImageInput = {
    where: CreativeWhereUniqueInput
    update: XOR<CreativeUpdateWithoutImageInput, CreativeUncheckedUpdateWithoutImageInput>
    create: XOR<CreativeCreateWithoutImageInput, CreativeUncheckedCreateWithoutImageInput>
  }

  export type CreativeUpdateWithWhereUniqueWithoutImageInput = {
    where: CreativeWhereUniqueInput
    data: XOR<CreativeUpdateWithoutImageInput, CreativeUncheckedUpdateWithoutImageInput>
  }

  export type CreativeUpdateManyWithWhereWithoutImageInput = {
    where: CreativeScalarWhereInput
    data: XOR<CreativeUpdateManyMutationInput, CreativeUncheckedUpdateManyWithoutImageInput>
  }

  export type CampaignCreateWithoutCreativesInput = {
    name: string
    industry: string
    targetAudience: string
    tone: $Enums.Tone
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    headlines?: HeadlineCreateNestedManyWithoutCampaignInput
    images?: ImageCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateWithoutCreativesInput = {
    id?: number
    name: string
    industry: string
    targetAudience: string
    tone: $Enums.Tone
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    headlines?: HeadlineUncheckedCreateNestedManyWithoutCampaignInput
    images?: ImageUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutCreativesInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutCreativesInput, CampaignUncheckedCreateWithoutCreativesInput>
  }

  export type HeadlineCreateWithoutCreativesInput = {
    text?: string | null
    status: $Enums.GenerationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    campaign: CampaignCreateNestedOneWithoutHeadlinesInput
  }

  export type HeadlineUncheckedCreateWithoutCreativesInput = {
    id?: number
    campaignId: number
    text?: string | null
    status: $Enums.GenerationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HeadlineCreateOrConnectWithoutCreativesInput = {
    where: HeadlineWhereUniqueInput
    create: XOR<HeadlineCreateWithoutCreativesInput, HeadlineUncheckedCreateWithoutCreativesInput>
  }

  export type ImageCreateWithoutCreativesInput = {
    url?: string | null
    prompt?: string | null
    status: $Enums.GenerationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    campaign: CampaignCreateNestedOneWithoutImagesInput
  }

  export type ImageUncheckedCreateWithoutCreativesInput = {
    id?: number
    campaignId: number
    url?: string | null
    prompt?: string | null
    status: $Enums.GenerationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageCreateOrConnectWithoutCreativesInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutCreativesInput, ImageUncheckedCreateWithoutCreativesInput>
  }

  export type CampaignUpsertWithoutCreativesInput = {
    update: XOR<CampaignUpdateWithoutCreativesInput, CampaignUncheckedUpdateWithoutCreativesInput>
    create: XOR<CampaignCreateWithoutCreativesInput, CampaignUncheckedCreateWithoutCreativesInput>
    where?: CampaignWhereInput
  }

  export type CampaignUpdateToOneWithWhereWithoutCreativesInput = {
    where?: CampaignWhereInput
    data: XOR<CampaignUpdateWithoutCreativesInput, CampaignUncheckedUpdateWithoutCreativesInput>
  }

  export type CampaignUpdateWithoutCreativesInput = {
    name?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    targetAudience?: StringFieldUpdateOperationsInput | string
    tone?: EnumToneFieldUpdateOperationsInput | $Enums.Tone
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    headlines?: HeadlineUpdateManyWithoutCampaignNestedInput
    images?: ImageUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateWithoutCreativesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    targetAudience?: StringFieldUpdateOperationsInput | string
    tone?: EnumToneFieldUpdateOperationsInput | $Enums.Tone
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    headlines?: HeadlineUncheckedUpdateManyWithoutCampaignNestedInput
    images?: ImageUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type HeadlineUpsertWithoutCreativesInput = {
    update: XOR<HeadlineUpdateWithoutCreativesInput, HeadlineUncheckedUpdateWithoutCreativesInput>
    create: XOR<HeadlineCreateWithoutCreativesInput, HeadlineUncheckedCreateWithoutCreativesInput>
    where?: HeadlineWhereInput
  }

  export type HeadlineUpdateToOneWithWhereWithoutCreativesInput = {
    where?: HeadlineWhereInput
    data: XOR<HeadlineUpdateWithoutCreativesInput, HeadlineUncheckedUpdateWithoutCreativesInput>
  }

  export type HeadlineUpdateWithoutCreativesInput = {
    text?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGenerationStatusFieldUpdateOperationsInput | $Enums.GenerationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneRequiredWithoutHeadlinesNestedInput
  }

  export type HeadlineUncheckedUpdateWithoutCreativesInput = {
    id?: IntFieldUpdateOperationsInput | number
    campaignId?: IntFieldUpdateOperationsInput | number
    text?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGenerationStatusFieldUpdateOperationsInput | $Enums.GenerationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUpsertWithoutCreativesInput = {
    update: XOR<ImageUpdateWithoutCreativesInput, ImageUncheckedUpdateWithoutCreativesInput>
    create: XOR<ImageCreateWithoutCreativesInput, ImageUncheckedCreateWithoutCreativesInput>
    where?: ImageWhereInput
  }

  export type ImageUpdateToOneWithWhereWithoutCreativesInput = {
    where?: ImageWhereInput
    data: XOR<ImageUpdateWithoutCreativesInput, ImageUncheckedUpdateWithoutCreativesInput>
  }

  export type ImageUpdateWithoutCreativesInput = {
    url?: NullableStringFieldUpdateOperationsInput | string | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGenerationStatusFieldUpdateOperationsInput | $Enums.GenerationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneRequiredWithoutImagesNestedInput
  }

  export type ImageUncheckedUpdateWithoutCreativesInput = {
    id?: IntFieldUpdateOperationsInput | number
    campaignId?: IntFieldUpdateOperationsInput | number
    url?: NullableStringFieldUpdateOperationsInput | string | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGenerationStatusFieldUpdateOperationsInput | $Enums.GenerationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeadlineCreateManyCampaignInput = {
    id?: number
    text?: string | null
    status: $Enums.GenerationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageCreateManyCampaignInput = {
    id?: number
    url?: string | null
    prompt?: string | null
    status: $Enums.GenerationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CreativeCreateManyCampaignInput = {
    id?: number
    headlineId?: number | null
    imageId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HeadlineUpdateWithoutCampaignInput = {
    text?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGenerationStatusFieldUpdateOperationsInput | $Enums.GenerationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatives?: CreativeUpdateManyWithoutHeadlineNestedInput
  }

  export type HeadlineUncheckedUpdateWithoutCampaignInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGenerationStatusFieldUpdateOperationsInput | $Enums.GenerationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatives?: CreativeUncheckedUpdateManyWithoutHeadlineNestedInput
  }

  export type HeadlineUncheckedUpdateManyWithoutCampaignInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGenerationStatusFieldUpdateOperationsInput | $Enums.GenerationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUpdateWithoutCampaignInput = {
    url?: NullableStringFieldUpdateOperationsInput | string | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGenerationStatusFieldUpdateOperationsInput | $Enums.GenerationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatives?: CreativeUpdateManyWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateWithoutCampaignInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: NullableStringFieldUpdateOperationsInput | string | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGenerationStatusFieldUpdateOperationsInput | $Enums.GenerationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatives?: CreativeUncheckedUpdateManyWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateManyWithoutCampaignInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: NullableStringFieldUpdateOperationsInput | string | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGenerationStatusFieldUpdateOperationsInput | $Enums.GenerationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreativeUpdateWithoutCampaignInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    headline?: HeadlineUpdateOneWithoutCreativesNestedInput
    image?: ImageUpdateOneWithoutCreativesNestedInput
  }

  export type CreativeUncheckedUpdateWithoutCampaignInput = {
    id?: IntFieldUpdateOperationsInput | number
    headlineId?: NullableIntFieldUpdateOperationsInput | number | null
    imageId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreativeUncheckedUpdateManyWithoutCampaignInput = {
    id?: IntFieldUpdateOperationsInput | number
    headlineId?: NullableIntFieldUpdateOperationsInput | number | null
    imageId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreativeCreateManyHeadlineInput = {
    id?: number
    campaignId?: number | null
    imageId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CreativeUpdateWithoutHeadlineInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneWithoutCreativesNestedInput
    image?: ImageUpdateOneWithoutCreativesNestedInput
  }

  export type CreativeUncheckedUpdateWithoutHeadlineInput = {
    id?: IntFieldUpdateOperationsInput | number
    campaignId?: NullableIntFieldUpdateOperationsInput | number | null
    imageId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreativeUncheckedUpdateManyWithoutHeadlineInput = {
    id?: IntFieldUpdateOperationsInput | number
    campaignId?: NullableIntFieldUpdateOperationsInput | number | null
    imageId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreativeCreateManyImageInput = {
    id?: number
    campaignId?: number | null
    headlineId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CreativeUpdateWithoutImageInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneWithoutCreativesNestedInput
    headline?: HeadlineUpdateOneWithoutCreativesNestedInput
  }

  export type CreativeUncheckedUpdateWithoutImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    campaignId?: NullableIntFieldUpdateOperationsInput | number | null
    headlineId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreativeUncheckedUpdateManyWithoutImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    campaignId?: NullableIntFieldUpdateOperationsInput | number | null
    headlineId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}