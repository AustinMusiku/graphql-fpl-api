import { GraphQLResolveInfo } from 'graphql';
import { GameWeek as GameWeekModel } from '@/models/gameWeek';
import { Chip as ChipModel } from '@/models/chip';
import { Player as PlayerModel } from '@/models/player';
import { PastFixture as PastFixtureModel } from '@/models/pastFixture';
import { UpcomingFixture as UpcomingFixtureModel } from '@/models/upcomingFixture';
import { Team as TeamModel } from '@/models/team';
import { ElementType as ElementTypeModel } from '@/models/elementType';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Chip = {
  __typename?: 'Chip';
  chip_name?: Maybe<Scalars['String']>;
  num_played?: Maybe<Scalars['Int']>;
};

export type ElementType = {
  __typename?: 'ElementType';
  element_count?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  plural_name?: Maybe<Scalars['String']>;
  plural_name_short?: Maybe<Scalars['String']>;
  singular_name?: Maybe<Scalars['String']>;
  singular_name_short?: Maybe<Scalars['String']>;
  squad_max_play?: Maybe<Scalars['Int']>;
  squad_min_play?: Maybe<Scalars['Int']>;
  squad_select?: Maybe<Scalars['Int']>;
  sub_positions_locked?: Maybe<Array<Maybe<Scalars['Int']>>>;
  ui_shirt_specific?: Maybe<Scalars['Boolean']>;
};

export type GameWeek = {
  __typename?: 'GameWeek';
  avg_points?: Maybe<Scalars['Int']>;
  chip_plays?: Maybe<Array<Maybe<Chip>>>;
  deadline_time?: Maybe<Scalars['String']>;
  finished?: Maybe<Scalars['Boolean']>;
  highest_score?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  is_current?: Maybe<Scalars['Boolean']>;
  is_next?: Maybe<Scalars['Boolean']>;
  is_previous?: Maybe<Scalars['Boolean']>;
};

export type PastFixture = {
  __typename?: 'PastFixture';
  assists?: Maybe<Scalars['Int']>;
  bps?: Maybe<Scalars['Int']>;
  clean_sheets?: Maybe<Scalars['Int']>;
  goals_conceded?: Maybe<Scalars['Int']>;
  goals_scored?: Maybe<Scalars['Int']>;
  minutes?: Maybe<Scalars['Int']>;
  opponent_team?: Maybe<Scalars['Int']>;
  own_goals?: Maybe<Scalars['Int']>;
  penalties_missed?: Maybe<Scalars['Int']>;
  penalties_saved?: Maybe<Scalars['Int']>;
  red_cards?: Maybe<Scalars['Int']>;
  round?: Maybe<Scalars['Int']>;
  saves?: Maybe<Scalars['Int']>;
  selected?: Maybe<Scalars['Int']>;
  team_a_score?: Maybe<Scalars['Int']>;
  team_h_score?: Maybe<Scalars['Int']>;
  total_points?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['Int']>;
  was_home?: Maybe<Scalars['Boolean']>;
  yellow_cards?: Maybe<Scalars['Int']>;
};

export type Player = {
  __typename?: 'Player';
  UpcomingFixtures?: Maybe<Array<Maybe<UpcomingFixture>>>;
  assists?: Maybe<Scalars['Int']>;
  bonus?: Maybe<Scalars['Int']>;
  bps?: Maybe<Scalars['Int']>;
  chance_of_playing_next_round?: Maybe<Scalars['Int']>;
  chance_of_playing_this_round?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['Int']>;
  cost_change_event?: Maybe<Scalars['Int']>;
  creativity?: Maybe<Scalars['Float']>;
  element_type?: Maybe<Scalars['Int']>;
  ep_next?: Maybe<Scalars['Float']>;
  ep_this?: Maybe<Scalars['Float']>;
  event_points?: Maybe<Scalars['Int']>;
  expected_assists?: Maybe<Scalars['Float']>;
  expected_goal_involvements?: Maybe<Scalars['Float']>;
  expected_goals?: Maybe<Scalars['Float']>;
  expected_goals_conceded?: Maybe<Scalars['Float']>;
  first_name?: Maybe<Scalars['String']>;
  form?: Maybe<Scalars['Float']>;
  goals_scored?: Maybe<Scalars['Int']>;
  ict_index?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Int']>;
  influence?: Maybe<Scalars['Float']>;
  minutes?: Maybe<Scalars['Int']>;
  news?: Maybe<Scalars['String']>;
  news_added?: Maybe<Scalars['String']>;
  now_cost?: Maybe<Scalars['Float']>;
  pastFixtures?: Maybe<Array<Maybe<PastFixture>>>;
  points_per_game?: Maybe<Scalars['Float']>;
  saves?: Maybe<Scalars['Int']>;
  second_name?: Maybe<Scalars['String']>;
  selected_by_percent?: Maybe<Scalars['Float']>;
  team?: Maybe<Team>;
  threat?: Maybe<Scalars['Float']>;
  total_points?: Maybe<Scalars['Int']>;
  transfers_in_event?: Maybe<Scalars['Int']>;
  transfers_out_event?: Maybe<Scalars['Int']>;
  web_name?: Maybe<Scalars['String']>;
};


export type PlayerUpcomingFixturesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Scalars['Int']>;
  gw?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  to?: InputMaybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  element_types?: Maybe<Array<Maybe<ElementType>>>;
  gameweek?: Maybe<GameWeek>;
  gameweeks?: Maybe<Array<Maybe<GameWeek>>>;
  player?: Maybe<Player>;
  players?: Maybe<Array<Maybe<Player>>>;
  team?: Maybe<Team>;
  teams?: Maybe<Array<Maybe<Team>>>;
};


export type QueryGameweekArgs = {
  id?: InputMaybe<Scalars['Int']>;
  is_current?: InputMaybe<Scalars['Boolean']>;
  is_next?: InputMaybe<Scalars['Boolean']>;
};


export type QueryGameweeksArgs = {
  is_finished?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPlayerArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type QueryPlayersArgs = {
  budgets?: InputMaybe<Scalars['Boolean']>;
  by_form?: InputMaybe<Scalars['Boolean']>;
  by_points?: InputMaybe<Scalars['Boolean']>;
  by_transfers?: InputMaybe<Scalars['Boolean']>;
  captains?: InputMaybe<Scalars['Boolean']>;
  differentials?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  mid_rangers?: InputMaybe<Scalars['Boolean']>;
  premiums?: InputMaybe<Scalars['Boolean']>;
  trim_extras?: InputMaybe<Scalars['Boolean']>;
};


export type QueryTeamArgs = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Team = {
  __typename?: 'Team';
  code?: Maybe<Scalars['Int']>;
  draw?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  loss?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  played?: Maybe<Scalars['Int']>;
  players?: Maybe<Array<Maybe<Player>>>;
  points?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['Int']>;
  pulse_id?: Maybe<Scalars['Int']>;
  short_name?: Maybe<Scalars['String']>;
  strength?: Maybe<Scalars['Int']>;
  strength_attack_away?: Maybe<Scalars['Int']>;
  strength_attack_home?: Maybe<Scalars['Int']>;
  strength_defence_away?: Maybe<Scalars['Int']>;
  strength_defence_home?: Maybe<Scalars['Int']>;
  strength_overall_away?: Maybe<Scalars['Int']>;
  strength_overall_home?: Maybe<Scalars['Int']>;
  win?: Maybe<Scalars['Int']>;
};

export type UpcomingFixture = {
  __typename?: 'UpcomingFixture';
  difficulty?: Maybe<Scalars['Int']>;
  event?: Maybe<Scalars['Int']>;
  finished?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  is_home?: Maybe<Scalars['Boolean']>;
  kickoff_time?: Maybe<Scalars['String']>;
  minutes?: Maybe<Scalars['Int']>;
  team_a?: Maybe<Scalars['Int']>;
  team_h?: Maybe<Scalars['Int']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Chip: ResolverTypeWrapper<ChipModel>;
  ElementType: ResolverTypeWrapper<ElementTypeModel>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  GameWeek: ResolverTypeWrapper<GameWeekModel>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  PastFixture: ResolverTypeWrapper<PastFixtureModel>;
  Player: ResolverTypeWrapper<PlayerModel>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Team: ResolverTypeWrapper<TeamModel>;
  UpcomingFixture: ResolverTypeWrapper<UpcomingFixtureModel>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Chip: ChipModel;
  ElementType: ElementTypeModel;
  Float: Scalars['Float'];
  GameWeek: GameWeekModel;
  Int: Scalars['Int'];
  PastFixture: PastFixtureModel;
  Player: PlayerModel;
  Query: {};
  String: Scalars['String'];
  Team: TeamModel;
  UpcomingFixture: UpcomingFixtureModel;
};

export type ChipResolvers<ContextType = any, ParentType extends ResolversParentTypes['Chip'] = ResolversParentTypes['Chip']> = {
  chip_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  num_played?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ElementTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ElementType'] = ResolversParentTypes['ElementType']> = {
  element_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  plural_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  plural_name_short?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  singular_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  singular_name_short?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  squad_max_play?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  squad_min_play?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  squad_select?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sub_positions_locked?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  ui_shirt_specific?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GameWeekResolvers<ContextType = any, ParentType extends ResolversParentTypes['GameWeek'] = ResolversParentTypes['GameWeek']> = {
  avg_points?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  chip_plays?: Resolver<Maybe<Array<Maybe<ResolversTypes['Chip']>>>, ParentType, ContextType>;
  deadline_time?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  finished?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  highest_score?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  is_current?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  is_next?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  is_previous?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PastFixtureResolvers<ContextType = any, ParentType extends ResolversParentTypes['PastFixture'] = ResolversParentTypes['PastFixture']> = {
  assists?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  bps?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  clean_sheets?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  goals_conceded?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  goals_scored?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  minutes?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  opponent_team?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  own_goals?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  penalties_missed?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  penalties_saved?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  red_cards?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  round?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  saves?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  selected?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  team_a_score?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  team_h_score?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total_points?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  was_home?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  yellow_cards?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Player'] = ResolversParentTypes['Player']> = {
  UpcomingFixtures?: Resolver<Maybe<Array<Maybe<ResolversTypes['UpcomingFixture']>>>, ParentType, ContextType, Partial<PlayerUpcomingFixturesArgs>>;
  assists?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  bonus?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  bps?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  chance_of_playing_next_round?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  chance_of_playing_this_round?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  cost_change_event?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  creativity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  element_type?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  ep_next?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  ep_this?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  event_points?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  expected_assists?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  expected_goal_involvements?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  expected_goals?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  expected_goals_conceded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  first_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  form?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  goals_scored?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  ict_index?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  influence?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  minutes?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  news?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  news_added?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  now_cost?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pastFixtures?: Resolver<Maybe<Array<Maybe<ResolversTypes['PastFixture']>>>, ParentType, ContextType>;
  points_per_game?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  saves?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  second_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  selected_by_percent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  team?: Resolver<Maybe<ResolversTypes['Team']>, ParentType, ContextType>;
  threat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  total_points?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  transfers_in_event?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  transfers_out_event?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  web_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  element_types?: Resolver<Maybe<Array<Maybe<ResolversTypes['ElementType']>>>, ParentType, ContextType>;
  gameweek?: Resolver<Maybe<ResolversTypes['GameWeek']>, ParentType, ContextType, Partial<QueryGameweekArgs>>;
  gameweeks?: Resolver<Maybe<Array<Maybe<ResolversTypes['GameWeek']>>>, ParentType, ContextType, Partial<QueryGameweeksArgs>>;
  player?: Resolver<Maybe<ResolversTypes['Player']>, ParentType, ContextType, Partial<QueryPlayerArgs>>;
  players?: Resolver<Maybe<Array<Maybe<ResolversTypes['Player']>>>, ParentType, ContextType, Partial<QueryPlayersArgs>>;
  team?: Resolver<Maybe<ResolversTypes['Team']>, ParentType, ContextType, Partial<QueryTeamArgs>>;
  teams?: Resolver<Maybe<Array<Maybe<ResolversTypes['Team']>>>, ParentType, ContextType>;
};

export type TeamResolvers<ContextType = any, ParentType extends ResolversParentTypes['Team'] = ResolversParentTypes['Team']> = {
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  draw?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  loss?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  played?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  players?: Resolver<Maybe<Array<Maybe<ResolversTypes['Player']>>>, ParentType, ContextType>;
  points?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pulse_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  short_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  strength?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  strength_attack_away?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  strength_attack_home?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  strength_defence_away?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  strength_defence_home?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  strength_overall_away?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  strength_overall_home?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  win?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpcomingFixtureResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpcomingFixture'] = ResolversParentTypes['UpcomingFixture']> = {
  difficulty?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  event?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  finished?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  is_home?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  kickoff_time?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  minutes?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  team_a?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  team_h?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Chip?: ChipResolvers<ContextType>;
  ElementType?: ElementTypeResolvers<ContextType>;
  GameWeek?: GameWeekResolvers<ContextType>;
  PastFixture?: PastFixtureResolvers<ContextType>;
  Player?: PlayerResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Team?: TeamResolvers<ContextType>;
  UpcomingFixture?: UpcomingFixtureResolvers<ContextType>;
};

